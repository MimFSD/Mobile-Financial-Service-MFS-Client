import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    // const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

const login = async (credentials) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.token) {
            setToken(data.token);
            // navigate('/');
        } else {
            console.error('Login failed: ', data.message || 'No token received');
            // Optionally, you can use alert or some UI feedback here
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Login error: ', error);
        alert('An error occurred. Please try again later.');
    }
};


    return (
        <AuthContext.Provider value={{ token, setToken, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



