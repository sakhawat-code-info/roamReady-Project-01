import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "../Components/SingleTouristSpot";


const AllTouristsSpot = () => {

    const touristDataFromDB = useLoaderData();

    console.log(touristDataFromDB);


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


                    {
                        touristDataFromDB.map(SingleTouristSpotData => <SingleTouristSpot
                            key={SingleTouristSpotData._id}
                            SingleTouristSpotData={SingleTouristSpotData}
                        ></SingleTouristSpot>)
                    }





                </div>
            </div>

        </div>
    );
};

export default AllTouristsSpot;


