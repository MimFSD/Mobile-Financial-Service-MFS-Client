/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import useLogin from '../../Hooks/useLogin';

const SendMoney = () => {
    const { login } = useLogin();
    const [eye, setEye] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const togglePassword = () => {
        setEye(!eye)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault();
        const form = e.target;
        await login(formData.username, formData.password);
        form.reset();
    }

    return (

        <div className=''>
            <div className='flex justify-center items-center h-screen'>
                <div className="relative">
                    <div >
                        <div className="card w-full shadow-2xl bg-blue-300">
                        <img className='w-24 mx-auto mt-4' src={logo} alt="" />
                            <h1 className="text-center text-4xl font-bold py-4">Send Money</h1>
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <input name="username" type="text" placeholder="Enter phone" className="input input-bordered lg:w-80" required onChange={handleChange} />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input name="amount" type="text" placeholder="Enter Amount" className="input input-bordered lg:w-80" required onChange={handleChange} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pin</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2 label">
                                        <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="Your 5 digit pin" onChange={handleChange} />
                                        <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                    </label>
                                </div>
                                
                                <div className="form-control mt-6 col-span-2">
                                    <button type="submit" className="btn bg-[#363062] border-none text-white">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SendMoney;
