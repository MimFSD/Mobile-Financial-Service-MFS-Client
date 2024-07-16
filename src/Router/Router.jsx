
import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import Home from "../Components/HomePage/Home";
import Root from "./Root";
import Login from "../Components/Authentication/Login/Login";
import Registation from "../Components/Authentication/Registation/Registation";


const Router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "register",
                element: <Registation></Registation>
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    },
]);

export default Router;