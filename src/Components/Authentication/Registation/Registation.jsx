import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/AxiosPublic/useAxios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Registration = () => {
    const axioss = useAxios();
    const navigat = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        pin: "",
        mobile: "",
        email: "",
        role: ""
    });

    const [errors, setErrors] = useState({
        mobile: "",
        pin: "",
        email: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = "";

        if (name === "mobile") {
            // Ensure the input is numeric and exactly 11 digits long
            if (!/^\d{0,11}$/.test(value)) {
                error = "Mobile number must be numeric and at most 11 digits.";
            } else if (value.length > 0 && value.length !== 11) {
                error = "Mobile number must be exactly 11 digits.";
            } else {
                error = ""; // Clear error if valid
            }
            setErrors((prevErrors) => ({ ...prevErrors, mobile: error }));
        }

        if (name === "pin") {
            // Ensure the PIN is numeric and exactly 5 digits long
            if (!/^\d{0,5}$/.test(value)) {
                error = "PIN must be numeric and at most 5 digits.";
            } else if (value.length > 0 && value.length !== 5) {
                error = "PIN must be exactly 5 digits.";
            } else {
                error = ""; // Clear error if valid
            }
            setErrors((prevErrors) => ({ ...prevErrors, pin: error }));
        }

        if (name === "email") {
            // Clear email error when email changes
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axioss.post("/register", formData);
            toast.success('Registered successful')
            resetForm();
            navigat("/");
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                // Assuming 409 is used for email conflict
                setErrors((prevErrors) => ({ ...prevErrors, email: "Email is already in use." }));
            } else {
                console.error(error);
                toast.error("Registration failed!");
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            pin: "",
            mobile: "",
            email: "",
            role: ""
        });
        setErrors({
            mobile: "",
            pin: "",
            email: ""
        });
    };

    return (
        <div>
            {/* Dynamic titlee section */}
            <div>
                <div>
                    <Helmet>
                        <title> Registation | ReadyPay</title>
                    </Helmet>
                </div>
            </div>

            <section className="relative py-10 bg-gray-900 sm:py-16 lg:py-24">
                <div className="absolute inset-0">
                    <img
                        className="object-cover w-full h-full"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg"
                        alt=""
                    />
                </div>

                <div className="relative max-w-lg px-4 mx-auto sm:px-0">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-900">Welcome ReadyPay</h2>
                                <p className="mt-2 text-base text-gray-600">Already have an account? <Link to="/login" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Go to sign up page </Link></p>
                                <p>OR</p>
                                <Link to="/" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Back to Home </Link>

                            </div>

                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900">Your Name</label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900">Email</label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Input your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                required
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-base flex text-start justify-start font-medium text-gray-900">Phone Number</label>
                                        <div className="mt-2.5">
                                            <input
                                                type="number"
                                                name="mobile"
                                                placeholder="Input your Mobile Number"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                required
                                            />
                                            {errors.mobile && (
                                                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                                            )}
                                        </div>
                                    </div>
                                    {/* Role section */}
                                    <div>
                                        <select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="select select-ghost form-control text-base font-medium justify-start block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            required
                                        >
                                            <option value="" disabled>Select Role</option>
                                            <option value="User">User</option>
                                            <option value="Agent">Agent</option>
                                        </select>
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
                                                className="absolute -mt-9 lg:ml-48 ml-44"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                            </span>
                                            {errors.pin && (
                                                <p className="text-red-500 text-sm mt-1">{errors.pin}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                        >
                                            Register Now
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

export default Registration;
