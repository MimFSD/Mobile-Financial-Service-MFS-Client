import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import LogoutProtected from "./LogoutProtected";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/HomoComponents/Dashboard/Dashboard";
import SendMoney from "../pages/SendMoney/SendMoney";
import CashOut from "../pages/CashOut/CashOut";
import CashIn from "../pages/CashIn/CashIn";
import NewUsers from "../pages/NewUsers/NewUsers";
import AllUsers from "../pages/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
        path:'/',
        element:<ProtectedRoute><Root></Root></ProtectedRoute>,
        children:[
            {
                path:'/',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/send-money',
                element:<SendMoney/>
            },
            {
                path:'/new-users',
                element:<NewUsers/>
            },
            {
                path:'/all-users',
                element:<AllUsers/>
            },
            {
                path:'/cash-out',
                element:<CashOut/>
            },
            {
                path:'/cash-in',
                element:<CashIn/>
            }
        ]
    },
     {
         path:'/register',
         element:<LogoutProtected><Register></Register></LogoutProtected>
     },
     {
         path:'/login',
         element:<LogoutProtected><Login></Login></LogoutProtected>
     }
])

export default router;