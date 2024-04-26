import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import App from "../App";
import RegisterPage from "../Pages/RegisterPage";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import MyList from "../Pages/MyList";
import ProtectedRoutes from "../Routes/ProtectedRoutes";
import AddTouristsSpot from "../Pages/AddTouristsSpot";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/allTouristsSpot",
                element: <AllTouristsSpot />,
            },
            {
                path: "/addTouristsSpot",
                element: <ProtectedRoutes><AddTouristsSpot /></ProtectedRoutes>,
            },
            {
                path: "/myList",
                element: <ProtectedRoutes><MyList /></ProtectedRoutes>,
            },
            {
                path: "/loginPage",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "/registerPage",
                element: <RegisterPage></RegisterPage>,
            },
        ],
    },
]);