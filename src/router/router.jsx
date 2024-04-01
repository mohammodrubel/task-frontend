import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Login from "../page/Login";
import Register from "../page/Register";
import UserData from "../page/UserData";
import RequiredRoute from "./RequiredRoute";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/user',
            element:<RequiredRoute><UserData/></RequiredRoute>
        },

    ]
)

export default router