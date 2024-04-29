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
import Delete from "../Pages/Delete";
import CountryCard from "../Pages/CountryCard";


// https://b9a10-server-side-sakhawat-code-info.vercel.app


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
                loader: () => fetch('https://b9a10-server-side-sakhawat-code-info.vercel.app/addTouristSpotData'),
            },
            {
                path: "/allTouristsSpot",
                element: <AllTouristsSpot />,
                loader: () => fetch('https://b9a10-server-side-sakhawat-code-info.vercel.app/addTouristSpotData'),
            },
            {
                path: "/viewDetailsPage/:showDetails",
                element: <ProtectedRoutes><ViewDetailsPage /></ProtectedRoutes>,
                loader: ({ params }) => fetch(`https://b9a10-server-side-sakhawat-code-info.vercel.app/findSingleDataForUpdate/${params.showDetails}`)
            },
            {
                path: "/addTouristsSpot",
                element: <ProtectedRoutes><AddTouristsSpot /></ProtectedRoutes>,
            },
            {
                path: "/updateTouristSpotDataPage/:needUpdateThisId",
                element: <ProtectedRoutes><UpdateTouristSpotDataPage /></ProtectedRoutes>,
                loader: ({ params }) => fetch(`https://b9a10-server-side-sakhawat-code-info.vercel.app/findSingleDataForUpdate/${params.needUpdateThisId}`)
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
            {
                path: "/delete",
                element: <Delete></Delete>,
            },
            {
                path: "/countryCard",
                element: <CountryCard />,
            },
        ],
    },
]);


// {
//     path: "/country/:country",
//     element: <CountryCard />,
//     loader: ({ params }) => fetch(`https://b9a10-server-side-sakhawat-code-info.vercel.app/country/${params.country}`)
// },