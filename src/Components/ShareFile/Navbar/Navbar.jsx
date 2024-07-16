import { Link, NavLink } from "react-router-dom";

import MFS from '../../../assets/MFS Icon.png'


const Navbar = () => {

    const navMenu = <>

        
        <li><NavLink to="/" > Service </NavLink></li>
        <li><NavLink to="/" > Offers </NavLink></li>
        <li><NavLink to="/" > About Us </NavLink></li>
        <li><NavLink to="/" > Help </NavLink></li>

    </>


    return (
        <div>
            <div className="justify-center flex text-center">
                <div className="navbar  fixed z-10  hover:bg-green-500  bg-opacity-30 max-w-screen-lg bg-green-200 text-white rounded-full mt-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-300 rounded-box w-52 gap-4">
                                {navMenu}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl text-[#CCCCFF]"> <img className="h-8 w-12" src={MFS} alt="" />ReadyPay</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end mr-4">
                        {/* {
                            user ? <Link className="btn">{profile}</Link> : <Link to="login" className="btn">Join Us</Link>
                        } */}
                        <Link to="login"><button className="btn btn-warning">Login</button></Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;