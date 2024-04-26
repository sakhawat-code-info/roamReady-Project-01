

const AllTouristsSpot = () => {
    return (
        <div>

            <div className="bg-white dark:bg-gray-800 ">
                <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            All Tourists Spot
                        </span>
                        <span className="block text-indigo-500">
                            It&#x27;s.
                        </span>
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className=" inline-flex rounded-md shadow">
                            <select className="select select-bordered select-xs w-full max-w-xs">
                                <option disabled selected>Tiny</option>
                                <option>Tiny Apple</option>
                                <option>Tiny Orange</option>
                                <option>Tiny Tomato</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                    {/* single component  */}
                    <div className="flex px-3 py-3">
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                {/* <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                                    perferendis eaque, exercitationem praesentium nihil.
                                </p> */}
                            </div>

                            <ul className="flex flex-col">

                                <li className="flex flex-row mb-1 border-gray-400">
                                    <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Season
                                            </div>
                                        </div>
                                        <div className="font-medium dark:text-white">
                                            Winter
                                        </div>
                                    </div>
                                </li>

                                <li className="flex flex-row mb-1 border-gray-400">
                                    <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Total Visitors Per Year
                                            </div>
                                        </div>
                                        <div className="font-medium dark:text-white">
                                            70K+ Members
                                        </div>
                                    </div>
                                </li>

                                <li className="flex flex-row mb-1 border-gray-400">
                                    <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Travel Time
                                            </div>
                                        </div>
                                        <div className="font-medium dark:text-white">
                                            5 Days
                                        </div>
                                    </div>
                                </li>

                                <li className="flex flex-row mb-1 border-gray-400">
                                    <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                        <div className="flex-1 pl-1 md:mr-16">
                                            <div className="font-medium dark:text-white">
                                                Average cost
                                            </div>
                                        </div>
                                        <div className="font-medium dark:text-white">
                                            3000 Tk
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="px-6 py-4 flex items-center justify-center">
                                <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>





                </div>
            </div>

        </div>
    );
};

export default AllTouristsSpot;


