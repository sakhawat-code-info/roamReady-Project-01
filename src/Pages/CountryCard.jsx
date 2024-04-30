import { Link, useLoaderData, useParams } from "react-router-dom";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TbCurrencyTaka } from "react-icons/tb";
import { Typewriter } from 'react-simple-typewriter'




const CountryCard = () => {


    const allSelectedCountryData = useLoaderData()

    const countryName = useParams();






    // 
    // 
    // location
    //   shortDescription
    //   average_cost
    //     locationImgLink







    return (
        <div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div className="space-y-4 flex items-center justify-center flex-col">
                        <h3 className="text-2xl font-bold leading-none sm:text-5xl capitalize"> {countryName.countyName}



                            <Typewriter
                                words={[' Is The Best place', ' For You To', ' Sleep', ' Code', ' Enjoy', " So Why you are waiting for lets go"]}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />





                        </h3>




                        <p className="max-w-2xl dark:text-gray-600 text-center">

                            <Typewriter
                                words={[`Discover one of the world most captivating destinations, where ancient wonders meet modern marvels, and breathtaking landscapes await at every turn. ${countryName.countyName} is a treasure trove of history, culture, and natural beauty, offering visitors`]}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />




                        </p>





                    </div>
                    <div className="grid w-full grid-cols-1 gap-2 ">


                        {
                            allSelectedCountryData?.map(singleCounty => <div key={singleCounty._id} className="px-2 py-20 w-full flex justify-center">
                                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                                    <div className="lg:w-1/2">
                                        <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg" style={{ backgroundImage: `url(${singleCounty.locationImgLink})` }}
                                        >
                                        </div>
                                    </div>
                                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                                        <h3 className="mb-1 text-slate-900 font-semibold">
                                            <span className="mb-1 block text-sm leading-6 text-indigo-500">{singleCounty.country_Name}</span>
                                        </h3>
                                        <h2 className="text-3xl text-gray-800 font-bold normal-case">
                                            {singleCounty.tourists_spot_name} at
                                            <span className="text-indigo-600"> {singleCounty.location}</span>
                                        </h2>
                                        <p className="mt-4 text-gray-600 text-justify indent-8">
                                            {singleCounty.shortDescription.slice(0, 300)} . . .
                                        </p>




                                        <div className="px-2 py-3 mt-3 flex flex-row items-center justify-between bg-gray-100">
                                            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">

                                                <span className="ml-1 flex items-center justify-center gap-2 font-extrabold"> <TiWeatherPartlySunny size={20} /> {singleCounty.seasonality}</span>
                                            </span>

                                            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">

                                                <span className="ml-1 text-indigo-600 flex items-center justify-center text-2xl font-extrabold  "><TbCurrencyTaka size={29} /> {singleCounty.average_cost}</span>
                                            </span>



                                            <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                                <Link to={`/viewDetailsPage/${singleCounty._id}`}>
                                                    <button className=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                                        View Details
                                                    </button>

                                                </Link>
                                            </span>





                                        </div>




                                    </div>
                                </div>
                            </div>)
                        }







                    </div>
                </div>
            </section>

        </div>
    );
};

export default CountryCard;