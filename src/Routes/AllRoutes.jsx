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
import UpdateTouristSpotDataPage from "../Pages/UpdateTouristSpotDataPage";
import ViewDetailsPage from "../Pages/ViewDetailsPage";






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
                loader: () => fetch('http://localhost:5000/addTouristSpotData'),
            },
            {
                path: "/viewDetailsPage/:showDetails",
                element: <ProtectedRoutes><ViewDetailsPage /></ProtectedRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/findSingleDataForUpdate/${params.showDetails}`)
            },
            {
                path: "/addTouristsSpot",
                element: <ProtectedRoutes><AddTouristsSpot /></ProtectedRoutes>,
            },
            {
                path: "/updateTouristSpotDataPage/:needUpdateThisId",
                element: <ProtectedRoutes><UpdateTouristSpotDataPage /></ProtectedRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/findSingleDataForUpdate/${params.needUpdateThisId}`)
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