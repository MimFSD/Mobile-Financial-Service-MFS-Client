import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import MFS from '../../../assets/MFS Icon.png';
import { useAuth } from "../../Authentication/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import useAxios from "../../../Hooks/AxiosPublic/useAxios";
import Overview from "../../UserDashboard/Overview/Overview";
import { useRef } from "react";
import BalanceModal from "../../BalanceModal/BalanceModal";

const Navbar = () => {
    const { token } = useAuth();
    const axioss = useAxios();
    const overviewModalRef = useRef(null);
    const balanceModalRef = useRef(null);

    // Overview Modal
    const handleOpenOverviewModal = () => {
        if (overviewModalRef.current) {
            overviewModalRef.current.showModal();
        }
    };

    const handleCloseOverviewModal = () => {
        if (overviewModalRef.current) {
            overviewModalRef.current.close();
        }
    };

    // Balance Modal
    const handleOpenBalanceModal = () => {
        if (balanceModalRef.current) {
            balanceModalRef.current.showModal();
        }
    };

    const handleCloseBalanceModal = () => {
        if (balanceModalRef.current) {
            balanceModalRef.current.close();
        }
    };

    const navMenu = (
        <>
            <li><Link > Service </Link></li>
            <li><Link > Offers </Link></li>
            <li><Link > About Us </Link></li>
            <li><Link > Help </Link></li>
        </>
    );

    const handleSignOut = () => {
        axioss.post('/logout', {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(() => {
                localStorage.removeItem('token');
                toast.success('LogOut successful!');
                setTimeout(() => {
                    window.location.reload();
                }, 400);
            })
            .catch((error) => {
                console.error('Logout error:', error);
                toast.error('Failed to log out!');
            });
    };

    const profile = (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="null" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRyukDe4q5dJpXgg5nIegQYQf66HXPGm57S_9EpJYbZtm0WP0R29sB9gxyUJZEqTew7Y&usqp=CAU" />
                    <FaUserCircle />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-blue-300 text-black rounded-box w-52">
                <li>
                    <a className="justify-center text-blue-500"> Dashboard </a>
                </li>

                {/* Overview */}
                <li>
                    <div>
                        <h2 onClick={handleOpenOverviewModal}>Overview</h2>
                        <dialog
                            id="overviewModal"
                            ref={overviewModalRef}
                            className="modal modal-bottom sm:modal-middle bg-fuchsia-500"
                        >
                            <div className="modal-box bg-white">
                                <div>
                                    <Overview onSuccess={handleCloseOverviewModal} />
                                </div>
                                <div className="modal-action">
                                    <button className="btn btn-primary" onClick={handleCloseOverviewModal}>Close</button>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </li>

                {/* Balance section */}
                <li>
                    <div>
                        <h2 onClick={handleOpenBalanceModal}>Balance</h2>
                        <dialog
                            id="balanceModal"
                            ref={balanceModalRef}
                            className="modal modal-bottom sm:modal-middle bg-fuchsia-500"
                        >
                            <div className="modal-box bg-white">
                                <div>
                                    <BalanceModal onSuccess={handleCloseBalanceModal} />
                                </div>
                                <div className="modal-action">
                                    <button className="btn btn-primary" onClick={handleCloseBalanceModal}>Close</button>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </li>
                <li><Link onClick={handleSignOut}>Logout</Link></li>
            </ul>
        </div>
    );

    return (
        <div>
            <div className="justify-center flex text-center">
                <div className="navbar fixed z-10 hover:bg-green-500 bg-opacity-30 max-w-screen-lg bg-green-200 text-white rounded-full mt-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-300 rounded-box w-52 gap-4">
                                {navMenu}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl text-[#CCCCFF]">
                            <img className="h-8 w-12" src={MFS} alt="ReadyPay" />ReadyPay
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end mr-4">
                        {token ? <Link className="btn">{profile}</Link> : <Link to="login"><button className="btn btn-warning">Login</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
