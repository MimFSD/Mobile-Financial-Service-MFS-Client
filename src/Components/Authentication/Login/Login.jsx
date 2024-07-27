import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAxios from "../../../Hooks/AxiosPublic/useAxios";
import { useAuth } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const axioss = useAxios();
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        identifier: '',
        pin: ''
    });

    const [errors, setErrors] = useState({
        identifier: '',
        pin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axioss.post('/login', formData);
            setToken(response.data.token);
            toast.success('Login successful!');
            navigate('/')
        } catch (error) {
            console.error('Login error:', error);
            if (error.response) {
                // Server error response
                const { status, data } = error.response;
                console.error('Response status:', status);
                console.error('Response data:', data);

                if (data && data.error) {
                    setErrors({
                        ...errors,
                        identifier: data.error
                    });
                } else {
                    setErrors({
                        ...errors,
                        identifier: 'Login failed due to server error!'
                    });
                }
            } else {
                // Network or other errors
                setErrors({
                    ...errors,
                    identifier: 'Login failed! Network error or server is unreachable.'
                });
            }
        }
    };

    return (
        <div>
            
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div className="absolute inset-0">
                            <img className="object-cover object-top w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/4/girl-thinking.jpg" alt="" />
                        </div>

                        <div className="relative">
                            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                                <h3 className="text-4xl font-bold text-white">Join ReadyPay & <br className="hidden xl:block" />Continue your Business</h3>
                                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Commercial License </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Unlimited CashOut </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Secure Send Money </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                                            <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" ></path>
                                            </svg>
                                        </div>
                                        <span className="text-lg font-medium text-white"> Easy online payment </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in ReadyPay</h2>
                            <p className="mt-2 text-base text-gray-600">Do not have an account? <Link to="/register" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Create a free account</Link></p>
                            <p>OR</p>
                            <Link to="/" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Back to Home </Link>

                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900">Email or Phone</label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="identifier"
                                                placeholder="Input your email or Phone"
                                                value={formData.identifier}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                required
                                            />
                                            {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900">Your PIN</label>
                                        <div className="mt-2.5 relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="pin"
                                                placeholder="Input your PIN"
                                                value={formData.pin}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 mr-0"
                                                required
                                            />
                                            <span
                                                className="absolute -mt-9 lg:ml-48 ml-44 cursor-pointer"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
