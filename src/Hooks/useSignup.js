import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const signup = async ({ name, phone, email, pin, role }) => {
        const success = handleInputErrors({ name, phone, email, pin, role });
        console.log({ name, phone, email, pin, role });
        if (!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, email, pin, role }),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("mfs", JSON.stringify(data));
            setAuthUser(data);
            navigate("/");
            location.reload()
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ name, phone, email, pin, role }) {
    if (!name || !phone || !email || !pin || !role) {
        toast.error("Please fill in all fields");
        return false;
    }
    if (pin.length < 5 || pin.length > 5) {
        toast.error("Password must be total 5 numbers");
        return false;
    }
    return true;
}
