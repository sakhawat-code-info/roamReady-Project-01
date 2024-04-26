import { Link, NavLink } from "react-router-dom";
import UseAuth from "../AuthProvider/UseAuth";


const Navbar = () => {

    const { user, loggingOut } = UseAuth();

    const handleLoggingOut = () => {
        loggingOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }


    return (
        <div>
            <div className="navbar bg-[#0f6780] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <Link to={'/'} className="btn btn-ghost text-xl">

                        <div className="flex items-center justify-center gap-4">
                            <img className="h-12 w-12 rounded-full" src="https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp" alt="" />
                            <h1 className="text-3xl">Roam Ready</h1>
                        </div>


                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex flex-wrap -mb-px">


                        <li className="mr-2">
                            <NavLink to={'/'} className={({ isActive }) =>
                                isActive ? "inline-block p-4 text-white border-b-2 border-white rounded-t-lg active" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#5DEBD7] hover:border-white"} aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li className="mr-2">
                            <NavLink to={'/allTouristsSpot'} className={({ isActive }) =>
                                isActive ? "inline-block p-4 text-white border-b-2 border-white rounded-t-lg active" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#5DEBD7] hover:border-white"} aria-current="page">
                                All Tourists Spot
                            </NavLink>
                        </li>
                        <li className="mr-2">
                            <NavLink to={'/addTouristsSpot'} className={({ isActive }) =>
                                isActive ? "inline-block p-4 text-white border-b-2 border-white rounded-t-lg active" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#5DEBD7] hover:border-white"} aria-current="page">
                                Add Tourists Spot
                            </NavLink>
                        </li>
                        <li className="mr-2">
                            <NavLink to={'/myList'} className={({ isActive }) =>
                                isActive ? "inline-block p-4 text-white border-b-2 border-white rounded-t-lg active" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#5DEBD7] hover:border-white"} aria-current="page">
                                My List
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end gap-4">

                    {
                        user ?
                            <>
                                {/* <div>
                                    <button onClick={handleLoggingOut} className="btn btn-warning">Logout</button>
                                </div> */}

                                <div className="flex items-center dropdown">
                                    <div className="relative ml-3">
                                        <div className="relative inline-block text-left">
                                            <div>
                                                <button type="button" className="  flex items-center justify-center w-full rounded-full   text-sm font-medium text-gray-700 dark:text-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                                    {
                                                        user && <div>
                                                            <img src={user.photoURL ? user.photoURL : 'https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp'} alt="" className="object-cover  w-12 h-12 rounded-full dark:bg-gray-500" />
                                                        </div>
                                                    }

                                                    {/* https://source.unsplash.com/100x100/?portrait */}

                                                </button>
                                            </div>
                                            <div className="dropdown-content z-[1] absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                    <a href="#" className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                        <span className="flex flex-col">
                                                            {
                                                                user && <>
                                                                    <span>
                                                                        {
                                                                            user.displayName
                                                                        }
                                                                    </span>
                                                                </>
                                                            }
                                                            {/* <span>
                                                                Settings
                                                            </span> */}
                                                        </span>
                                                    </a>
                                                    <a href="#" className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                        <span className="flex flex-col">
                                                            <span>
                                                                Settings
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                        <span className="flex flex-col">
                                                            <span onClick={handleLoggingOut}>
                                                                Logout
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                            :
                            <>
                                <div>
                                    <Link to={"/loginPage"}>
                                        <button className="btn btn-accent">Login</button>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/registerPage"}>
                                        <button className="btn btn-accent">Register</button>
                                    </Link>
                                </div>
                            </>
                    }








                </div>
            </div>
        </div>
    );
};

export default Navbar;