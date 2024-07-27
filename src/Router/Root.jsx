import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/ShareFile/Navbar/Navbar";
import Footer from "../Components/ShareFile/Footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const Root = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') ||
        location.pathname.includes('register');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <ToastContainer />
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;