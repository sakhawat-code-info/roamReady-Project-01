import { Link, NavLink } from "react-router-dom";
import UseAuth from "../AuthProvider/UseAuth";
// import { useEffect, useState } from "react";


const Navbar = () => {
    // const [theme, setTheme] = useState('light');

    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localStorTheme = localStorage.getItem('theme');
    //     document.querySelector('html').setAttribute('data-theme', localStorTheme);
    // }, [theme])

    // const handleTheme = (e) => {

    //     if (e.target.checked) {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // }

    // console.log(theme);

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


                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">



                                        <a className="z-30" title={user?.displayName}>
                                            <img
                                                src={user?.photoURL ? user.photoURL : 'https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp'} alt="" className="object-cover  w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </a>

                                    </div>
                                </div>

                                <div>

                                    <button onClick={handleLoggingOut} className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full bg-red-800 hover:bg-gray-800 hover:text-white border-2 border-red-800 hover:border-gray-800 focus:outline-none">
                                        Logout
                                    </button>

                                </div>




                                {/* 
                                <div className="flex items-center dropdown">
                                    <div className="relative ml-3">
                                        <div className="relative inline-block text-left">
                                            <div>
                                                <button type="button" className="  flex items-center justify-center w-full rounded-full   text-sm font-medium text-gray-700 dark:text-gray-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                                    {
                                                        user && <div>
                                                            <img src={user?.photoURL ? user.photoURL : 'https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp'} alt="" className="object-cover  w-12 h-12 rounded-full dark:bg-gray-500" />
                                                        </div>
                                                    }

                                                   

                                                </button>
                                            </div>
                                            <div className="dropdown-content z-[100] absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
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
                                                        </span>
                                                    </a>
                                                    <a href="#" className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                        <span className="flex flex-col">
                                                            <span>
                                                                Settings
                                                            </span>
                                                        </span>
                                                    </a>
                                                    <a href="#" className="block px-4 py-2 text-md text-gray-700 " role="menuitem">
                                                        <span className="flex flex-col mt-5">
                                                            <span onClick={handleLoggingOut}>
                                                                <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group w-full">
                                                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                                                    </span>
                                                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                                                    <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Logout</span>
                                                                </a>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </>
                            :
                            <>
                                <div>
                                    <Link to={"/loginPage"}>
                                        <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                            Login
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <Link to={"/registerPage"}>
                                        <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                            Register
                                        </button>
                                    </Link>
                                </div>
                            </>
                    }

                    <div>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state onChange={handleTheme} */}
                            <input type="checkbox" className="theme-controller" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>






                </div>
            </div>
        </div>
    );
};

export default Navbar;