import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            {/* <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer> */}

            <footer className="px-3 py-14 text-white transition-colors duration-200 bg-[#0f6780] dark:bg-gray-800 text-2 dark:text-gray-200">
                <div className="flex flex-col">
                    <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11">
                    </div>
                    <div className="flex flex-col mt-4 md:mt-0 md:flex-row">

                        <div className="flex items-center justify-center gap-4">
                            <img className="h-20 w-20 rounded-full" src="https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp" alt="" />
                            <h1 className="text-4xl">Roam Ready</h1>
                        </div>

                        <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
                            <a aria-current="page" href="#" className="hover:text-gray-700 dark:hover:text-white">

                                <Link to={'/termsAndConditions'}>
                                    Terms and conditions
                                </Link>
                            </a>
                            <a aria-current="page" href="#" className="hover:text-gray-700 dark:hover:text-white">

                                <Link to={'/ourTeams'}>
                                    Contacts
                                </Link>
                            </a>

                            {/* <a aria-current="page" href="#" className="hover:text-gray-700 dark:hover:text-white">
                                Customization
                            </a> */}
                        </nav>

                        <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11">
                        </div>


                        <div className="flex items-center justify-center flex-1 gap-4 mt-4 border-gray-100 md:mt-0 md:border-r">
                            <a href="#">
                                <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                        </path>
                                    </svg>

                                </button>
                            </a>

                            <a href="#">

                                <button type="button" className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                </button>

                            </a>
                            <a href="#">

                                <button type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <svg width="20" height="20" fill="currentColor" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                        </path>
                                    </svg>

                                </button>

                            </a>
                            <a href="#">
                                <span className="sr-only">Facebook</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1298" height="2500" viewBox="88.428 12.828 107.543 207.085" className="w-5 h-5" aria-hidden="true">
                                    <path
                                        d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                                        fill="#3c5a9a"
                                    />
                                </svg>
                            </a>










                        </div>


                        <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 ">
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
                            <span className="">
                                © 2021
                            </span>
                            <span className="mt-7 md:mt-1">
                                Created by &nbsp;
                                <a className="underline hover:text-primary-gray-20" href="https://www.linkedin.com/in/crabiller/">
                                    Roam Ready
                                </a>
                            </span>
                        </div>


                    </div>


                    <div className="mt-10 flex items-center justify-start">
                        <p>Copyright © 2024 - All right reserved by Roam Ready</p>
                    </div>

                </div>
            </footer>


        </div>
    );
};

export default Footer;