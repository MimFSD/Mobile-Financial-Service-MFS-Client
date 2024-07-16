/* eslint-disable react/no-unknown-property */
import React, { useContext, useState } from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdDashboard, MdOutlineCreateNewFolder } from "react-icons/md";
import { FaHome, FaRegUserCircle, FaUsers } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu, GiReceiveMoney } from "react-icons/gi";
import { BiDonateHeart } from 'react-icons/bi';
import { IoIosLogOut } from 'react-icons/io';
import { ImBlogger2, ImUsers } from "react-icons/im";
import useLogout from '../../Hooks/useLogout';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AuthContext } from '../../Context/AuthContext';

const Sidebar = () => {

    const [sidebar, SetSidebar] = useState(false)
    const navigate = useNavigate()
    const [active] = useState(false)
    const {logout} = useLogout()
    const {authUser} = useContext(AuthContext)




    const handleSidebar = () => {
        SetSidebar(!sidebar)
    }


    return (
        <div className='relative'>

            <button onClick={handleSidebar} type="button" className="inline-flex z-10 absolute right-0 items-center p-2 text-2xl mt-2  ms-3 text-gray-500 rounded-lg sm:hidden focus:outline-none focus:ring-2">
                <GiHamburgerMenu />
            </button>

            <aside id="default-sidebar" className={`fixed left-0 z-40 w-64 lg:w-72 h-screen transition-transform sm:translate-x-0 ${sidebar ? 'top-0' : '-translate-x-full'}`} aria-label="Sidebar">

                <div className="h-full px-3 py-4 overflow-y-auto bg-[#eee] shadow grid ">
                    <ul className="space-y-2 font-medium">
                        <button onClick={handleSidebar} className='absolute right-4  text-2xl md:hidden block'><IoCloseSharp /></button>

                        {/* Profile Pic and name */}
                        <div className='mb-4 '>

                            <Link className='cursor-pointer' to='/'><img className='w-[50%] mx-auto' src={logo} alt="" /></Link>
                            <hr className='border-2 mt-4 border-black' />

                        </div>

                        {/* Others */}

                        <li>
                            <NavLink style={() => ({
                                color: "#3572EF",
                                background: active ? '#374151' : ''

                            })} to='/' className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                                <p className='text-2xl'><span className='text-gray-400 group-hover:text-white' >< MdDashboard /></span></p>
                                <span className="ms-3">Dashboard</span>

                            </NavLink>
                        </li>
                        { authUser.role === 'admin' &&
                            <li>
                                <NavLink style={({ isActive }) => ({
                                    color: "#3572EF",
                                    background: isActive ? '#374151' : ''
                                })} to='/new-users' className="flex items-center p-2 rounded-lg  hover:bg-gray-700 group">
                                    <p className='text-2xl'><span className='text-gray-400 group-hover:text-white' ><ImUsers /></span></p>
                                    <span className="ms-3">New Users</span>
                                </NavLink>
                            </li>
                        }
                        { authUser.role === 'admin' &&
                            <li>
                                <NavLink style={({ isActive }) => ({
                                    color: "#3572EF",
                                    background: isActive ? '#374151' : ''
                                })} to='/all-users' className="flex items-center p-2 rounded-lg  hover:bg-gray-700 group">
                                    <p className='text-2xl'><span className='text-gray-400 group-hover:text-white' ><FaUsers /></span></p>
                                    <span className="ms-3">All Users</span>
                                </NavLink>
                            </li>
                        }
                        <li>
                            <NavLink style={({ isActive }) => ({
                                color: "#3572EF",
                                background: isActive ? '#374151' : ''
                            })} to='/send-money' className="flex items-center p-2 rounded-lg  hover:bg-gray-700 group">
                                <p className='text-2xl'><span className='text-gray-400 group-hover:text-white' ><GiReceiveMoney /></span></p>
                                <span className="ms-3">Send Money</span>
                            </NavLink>
                        </li>
                      
                        { 
                            <li>
                                <NavLink style={({ isActive }) => ({
                                    color: "#3572EF",
                                    background: isActive ? '#374151' : ''
                                })} to='/cash-out' className="flex items-center p-2 rounded-lg  hover:bg-gray-700 group">
                                    <p className='text-2xl'><span className='text-gray-400 group-hover:text-white' ><FaMoneyBillTrendUp /></span></p>
                                    <span className="ms-3">Cash Out</span>
                                </NavLink>
                            </li>
                        }
                        { 
                            <li>
                                <NavLink style={({ isActive }) => ({
                                    color: "#3572EF",
                                    background: isActive ? '#374151' : ''
                                })} to='/cash-in' className="flex items-center p-2 rounded-lg  hover:bg-gray-700 group">
                                    <p className='text-2xl'><span className='text-gray-400 group-hover:text-white' ><BiDonateHeart /></span></p>
                                    <span className="ms-3">Cash In</span>
                                </NavLink>
                            </li>
                        }
                    </ul>

                    <ul className='self-end md:space-x-6 lg:space-x-16'>
                        <button onClick={logout} className='btn btn-sm btn-error text-white'>Logout <IoIosLogOut /></button>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;