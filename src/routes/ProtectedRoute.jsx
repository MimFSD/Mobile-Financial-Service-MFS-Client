import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import useLogout from '../Hooks/useLogout';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const { authUser, loadingUser } = useContext(AuthContext)
    const { logout } = useLogout()

    if (loadingUser) {
        return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    if (authUser) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;