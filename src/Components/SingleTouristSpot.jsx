import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleTouristSpot = ({ SingleTouristSpotData }) => {

    const {
        _id,
        tourists_spot_name,
        locationImgLink,
        average_cost,
        totalVisitorsPerYear,
        travel_time,
        seasonality,

    } = SingleTouristSpotData;


    return (
        <div>
            <div className="flex px-3 py-3">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full md:h-60" src={locationImgLink} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{tourists_spot_name}</div>
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
                                    {seasonality}
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
                                    {totalVisitorsPerYear}K+ Members
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
                                    {travel_time} Days
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
                                    {average_cost} Tk
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="px-6 py-4 flex items-center justify-center">
                        <Link to={`/viewDetailsPage/${_id}`}>
                            <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                View Details
                            </button>

                        </Link>


                        {/* SingleTouristSpotData */}
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleTouristSpot.propTypes = {
    SingleTouristSpotData: PropTypes.obj
};
export default SingleTouristSpot;