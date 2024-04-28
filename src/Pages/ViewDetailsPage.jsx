import { useLoaderData } from "react-router-dom";



const ViewDetailsPage = () => {

    const detailsData = useLoaderData();

    const {
        country_Name,
        location,
        tourists_spot_name,
        locationImgLink,
        shortDescription,
        seasonality,
        travel_time,
        totalVisitorsPerYear,
        average_cost,
        userName,
        userEmail,
        userCreatePostDateAndTime
    } = detailsData;



    return (
        <div>
            <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:my-20">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="ml-auto lg:col-start-2 lg:max-w-2xl">

                            <div className="pb-3 mb-3 border-b border-gray-200">
                                <div className="flex items-center justify-start gap-5">
                                    <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                                        {country_Name}
                                    </p>
                                    <div className="flex space-x-2">
                                        <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">{location}</a>
                                    </div>
                                </div>

                                <h4 className=" text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                                    {tourists_spot_name}
                                </h4>

                                <p className="text-base text-gray-500 mt-3">{userCreatePostDateAndTime.slice(0, 17)} — Written by {userName}</p>
                            </div>
                            <div className="flex items-center mb-6 space-x-2">
                                <p className="text-gray-600">Share this article</p>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="flex-none w-5 h-5" fill="currentColor">
                                        <path
                                            d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="flex-none w-5 h-5" fill="currentColor">
                                        <path
                                            d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
                                        />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="flex-none w-5 h-5" fill="currentColor">
                                        <circle cx="4.983" cy="5.009" r="2.188" />
                                        <path
                                            d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z"
                                        />
                                    </svg>
                                </a>
                            </div>

                            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" >
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            {seasonality}
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            {travel_time} days open
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            {totalVisitorsPerYear}k Visitors / Year
                                        </span>
                                    </div>
                                </li>
                                <li className="mt-6 lg:mt-0">
                                    <div className="flex">
                                        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                            {average_cost} tk
                                        </span>
                                    </div>
                                </li>
                            </ul>


                            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ut. Ea nihil praesentium distinctio fugit recusandae nulla amet, maxime ex fugiat magnam dolorum, neque, obcaecati tempore quia unde itaque magni dolor doloribus asperiores. Modi quod distinctio voluptates cupiditate a neque! Sed et inventore consequatur assumenda ratione magnam possimus ipsum error eum cupiditate rerum quisquam dolor perferendis, quas doloribus hic soluta atque odio delectus animi ullam modi minus. Libero, maiores odio animi amet veritatis accusantium delectus, doloremque nemo fugiat deleniti ducimus quos laborum iure rem porro, ipsa odit. Sunt officiis perferendis impedit, deserunt itaque enim autem omnis distinctio illum delectus quam!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ut. Ea nihil praesentium distinctio fugit recusandae nulla amet, maxime
                            </p>
                        </div>



                        <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://img.freepik.com/free-photo/smiley-woman-with-red-baggage-medium-shot_23-2149380134.jpg?t=st=1714147538~exp=1714151138~hmac=91328cd485162d81905615da53fff25fd08c48f1b81ff58f666ba11d85572a2b&w=360" alt="1" />
                                    <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2023/07/travel-insurance-woman-on-boat.jpeg.jpg" alt="2" />
                                </div>
                                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                    <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="3" />
                                    <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://i.pinimg.com/736x/57/d9/12/57d912449af2ec54bb79f46780854abb.jpg" alt="4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetailsPage;