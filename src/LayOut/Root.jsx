import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;