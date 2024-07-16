import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/ShareFile/Navbar/Navbar";
import Footer from "../Components/ShareFile/Footer/Footer";


const Root = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') ||
        location.pathname.includes('register');

    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter ||<Footer></Footer> }
        </div>
    );
};

export default Root;