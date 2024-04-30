import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Countries = () => {

    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch('https://b9a10-server-side-sakhawat-code-info.vercel.app/countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            })
    }, [])


    // console.log(countries);


    return (
        <div>
            <div className="w-full p-4 bg-white dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-end justify-between mb-3 header">
                    <div className="title">
                        <p className="mb-4 text-4xl font-bold text-gray-800">
                            Countries
                        </p>
                        {/* <p className="text-2xl font-light text-gray-400">
                            All article are verified by 2 experts and valdiate by the CTO
                        </p> */}
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 dark:bg-gray-50 dark:text-gray-800">



                    {
                        countries?.map(country => <Link to={`/countryCard/${country.country_Name}`} key={country._id}>
                            <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer sm:h-full sm:w-full md:w-full dark:bg-gray-50 dark:text-gray-800">
                                <a href="#" className="block w-full h-full">
                                    <img alt="blog photo" src={country.image} className="object-cover w-full h-72 bg-white" />
                                    <div className="w-full p-4 bg-white dark:bg-gray-800">

                                        <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                            {country.country_Name}
                                        </p>
                                        <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                            <span className="font-semibold">Best Places : </span>

                                            <Typewriter
                                                words={[`${country.shortDescription}`]}
                                                loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={240}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />




                                        </p>

                                    </div>
                                </a>
                            </div>
                        </Link>)
                    }





                    {/* 
                    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer sm:h-full sm:w-full md:w-full">
                        <a href="#" className="block w-full h-full">
                            <img alt="blog photo" src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" className="object-cover w-full h-72 p-1 bg-red-600" />
                            <div className="w-full p-4 bg-white dark:bg-gray-800">

                                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                    Thailand
                                </p>
                                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                    <span className="font-semibold">Best Places : </span>Bangkok, Chiang Mai, Ayu�haya, Phuket, Phi Phi Islands
                                </p>

                            </div>
                        </a>
                    </div>

                    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer sm:h-full sm:w-full md:w-full">
                        <a href="#" className="block w-full h-full">
                            <img alt="blog photo" src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" className="object-cover w-full h-72 p-1 bg-red-600" />
                            <div className="w-full p-4 bg-white dark:bg-gray-800">

                                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                    Indonesia
                                </p>
                                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                    <span className="font-semibold">Best Places : </span>Bali, Borobudur Temple, Komodo National Park, Raja Ampat Islands, Yogyakarta
                                </p>

                            </div>
                        </a>
                    </div>

                    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer sm:h-full sm:w-full md:w-full">
                        <a href="#" className="block w-full h-full">
                            <img alt="blog photo" src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" className="object-cover w-full h-72 p-1 bg-red-600" />
                            <div className="w-full p-4 bg-white dark:bg-gray-800">

                                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                    Malaysia
                                </p>
                                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                    <span className="font-semibold">Best Places : </span>Kuala Lumpur, Langkawi, Penang, Cameron Highlands,
                                    Taman Negara National Park
                                </p>

                            </div>
                        </a>
                    </div>

                    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer sm:h-full sm:w-full md:w-full">
                        <a href="#" className="block w-full h-full">
                            <img alt="blog photo" src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" className="object-cover w-full h-72 p-1 bg-red-600" />
                            <div className="w-full p-4 bg-white dark:bg-gray-800">

                                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                    Vietnam
                                </p>
                                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                    <span className="font-semibold">Best Places : </span>Ha Long Bay, Ho Chi Minh City, Hoi An Ancient Town, Phong
                                    Nha Caves, Mekong Delta
                                </p>

                            </div>
                        </a>
                    </div>

                    <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer sm:h-full sm:w-full md:w-full">
                        <a href="#" className="block w-full h-full">
                            <img alt="blog photo" src="https://media.istockphoto.com/id/1095885438/photo/the-bandra-worli-sea-link.jpg?s=1024x1024&w=is&k=20&c=VoTfOaohVt8OyE-_xSELqc1UKZ7d3Fwim3JAMYPKLV8=" className="object-cover w-full h-72 p-1 bg-red-600" />
                            <div className="w-full p-4 bg-white dark:bg-gray-800">

                                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                                    Cambodia
                                </p>
                                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                                    <span className="font-semibold">Best Places : </span>Angkor Wat, Siem Reap, Phnom Penh, Kep, Bokor National
                                    Park
                                </p>

                            </div>
                        </a>
                    </div>
 */}










                </div>
            </div>

        </div>
    );
};

export default Countries;