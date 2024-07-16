import React, { useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import useSignup from '../../Hooks/useSignup';
import toast from 'react-hot-toast';
import './Register.css';

const Register = () => {
    const { signup } = useSignup();
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState(true);
    const [userRole, setUserRole] = useState('user');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        pin: 0,
        role: userRole,
        balance: 0
    });

    // Update formData whenever userRole changes
    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            role: userRole
        }));
    }, [userRole]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const pin = e.target.pin.value;
        if (pin.length !== 5) {
            toast.error("Pin Must be 5 Digit");
        } else {
            await signup(formData);
        }
        setIsLoading(false);
    };

    return (
        <div className='background'>
            <div className='lg:flex justify-center items-center h-screen'>
                <div className="">
                    <div className="">
                        <div className="card w-full lg:shadow-2xl">
                            <img className='w-24 mx-auto mt-4' src={logo} alt="" />
                            <h1 className="text-center lg:text-5xl text-3xl font-bold">Register {role ? <span>User</span> : <span>Agent</span>}</h1>
                            <div className='space-x-3 mx-auto mt-4'>
                                <button onClick={() => { setRole(true); setUserRole('user'); }} className={`btn btn-sm border-0 ${role ? 'bg-red-500 text-white' : ''}`}>User</button>
                                <button onClick={() => { setRole(false); setUserRole("agent"); }} className={`btn btn-sm border-0 ${!role ? 'bg-red-500 text-white' : ''}`}>Agent</button>
                            </div>
                            <form className="lg:card-body lg:px-8 md:px-8 px-4 lg:grid lg:grid-cols-2" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Enter full name" className="input input-bordered" required onChange={handleChange} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pin</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2 label">
                                        <input name="pin" type='number' className="grow" placeholder="Enter 5 Digit Pin Number" onChange={handleChange} />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input name="phone" type="text" placeholder="01XXXXXXXXX" className="input input-bordered" required onChange={handleChange} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required onChange={handleChange} />
                                </div>
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <p className="pt-2 text-sm">Already have an account? <span className="text-white"><Link to='/login'>Login</Link></span></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6 col-span-2">
                                    <button type="submit" className="btn bg-[#363062] border-none text-white">Register {isLoading && <span className="loading loading-spinner loading-md"></span>}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
