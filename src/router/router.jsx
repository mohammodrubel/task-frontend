import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Login from "../page/Login";
import Register from "../page/Register";

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

    ]
)

export default router