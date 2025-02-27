import { useLoaderData } from "react-router-dom";
import SingleTouristSpot from "../Components/SingleTouristSpot";
import { useState } from "react";


const AllTouristsSpot = () => {

    const touristDataFromDB = useLoaderData();

    const [allData, setAllData] = useState(touristDataFromDB);

    // console.log(allData)


    const sortBy = (sortData) => {

        if (sortData === "averageCost") {
            const sortByNumber = [].concat(allData).sort((a, b) => b.average_cost - a.average_cost);
            setAllData(sortByNumber);
        }


    };


    return (
        <div>

            <div className="bg-white dark:bg-gray-800 ">
                <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            All Tourists Spot
                        </span>
                        {/* <span className="block text-indigo-500">
                            It&#x27;s.
                        </span> */}
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">


                        <div className="dropdown dropdown-end ">
                            <div tabIndex={0} role="button" className="btn border-[#0f6780]">Sort</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24">
                                <li onClick={() => sortBy("averageCost")}>Sort By Price </li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


                    {/* single component  */}


                    {
                        allData?.map(SingleTouristSpotData => <SingleTouristSpot
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


