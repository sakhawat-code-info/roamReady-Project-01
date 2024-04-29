
import UseAuth from "../AuthProvider/UseAuth";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateTouristSpotDataPage = () => {
    const navigate = useNavigate();


    const { user } = UseAuth();
    // const navigate = useNavigate();

    const oldDataNeedToUpdate = useLoaderData();

    const {
        _id,
        country_Name,
        location,
        tourists_spot_name,
        locationImgLink,
        shortDescription,
        seasonality,
        travel_time,
        totalVisitorsPerYear,
        average_cost
    } = oldDataNeedToUpdate;

    // console.log(_id)



    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const locationImgLink = form.locationImgLink.value;
        const shortDescription = form.shortDescription.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const average_cost = form.average_cost.value;
        const userName = user.displayName;
        const userEmail = user.email;
        const userCreatePostDateAndTime = user.metadata.lastSignInTime;


        const updateTouristSpotData = {
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
        }

        // console.log(updateTouristSpotData);

        fetch(`https://b9a10-server-side-sakhawat-code-info.vercel.app/updateSingleData/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateTouristSpotData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        title: "Do you want to save the changes?",
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Save",
                        denyButtonText: `Don't save`
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            Swal.fire("Saved!", "", "success");
                            navigate('/myList');
                        } else if (result.isDenied) {
                            Swal.fire("Changes are not saved", "", "info");
                            navigate('/myList');
                        }
                    });

                }


            })
    }
    return (
        <div>
            <section className="container max-w-2xl mx-auto shadow-md md:w-3/4 bg-gray-100">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full max-w-2xl px-5 py-10 mx-auto m-10 bg-white rounded-lg shadow dark:bg-gray-800">

                            <div className=" mb-10 text-3xl ">
                                <a className="flex items-center text-gray-700" href="#">
                                    <div className="avatar w-10 h-10 rounded-full">
                                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="Photo of Praveen Juge" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-sm font-semibold text-gray-800">{user?.displayName}</p>
                                        <p className="text-sm text-gray-500">{user?.metadata.lastSignInTime.slice(5, 17)}</p>
                                    </div>
                                </a>
                                <h1 className="text-4xl font-semibold text-center text-gray-900">Update Tourists Spot Data</h1>
                            </div>
                            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <select defaultValue={country_Name} className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="country_Name" required>
                                            <option value="">
                                                Country Name
                                            </option>
                                            <option value="Bangladesh">
                                                Bangladesh
                                            </option>
                                            <option value="Thailand">
                                                Thailand
                                            </option>
                                            <option value="Indonesia">
                                                Indonesia
                                            </option>
                                            <option value="Malaysia">
                                                Malaysia
                                            </option>
                                            <option value="Vietnam">
                                                Vietnam
                                            </option>
                                            <option value="Cambodia">
                                                Cambodia
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input type="text" name="location" defaultValue={location} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location" required />
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Tourists Spot Name" required />
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input type="text" name="locationImgLink" defaultValue={locationImgLink} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location Img Link" required />
                                    </div>
                                </div>


                                <div className="col-span-2">
                                    <label className="text-gray-700" >
                                        <textarea defaultValue={shortDescription} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Enter your short description" name="shortDescription" rows="5" cols="40" required>
                                        </textarea>
                                    </label>
                                </div>


                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">

                                        <select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="seasonality" defaultValue={seasonality} required>
                                            <option value="">
                                                Season
                                            </option>
                                            <option value="Summer">
                                                Summer
                                            </option>
                                            <option value="Rainy-seasion">
                                                Rainy-seasion
                                            </option>
                                            <option value="Autumn">
                                                Autumn
                                            </option>
                                            <option value="Late-autumn">
                                                Late-autumn
                                            </option>
                                            <option value="Winter">
                                                Winter
                                            </option>
                                            <option value="Spring">
                                                Spring
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="travel_time" defaultValue={travel_time} required>
                                            <option value="">
                                                Open Days
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="2">
                                                2
                                            </option>
                                            <option value="3">
                                                3
                                            </option>
                                            <option value="4">
                                                4
                                            </option>
                                            <option value="5">
                                                5
                                            </option>
                                            <option value="6">
                                                6
                                            </option>
                                            <option value="7">
                                                7
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input type="number" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Total Visitors Per Year" required />
                                    </div>
                                </div>


                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input type="number" name="average_cost" defaultValue={average_cost} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Average Cost" required />
                                    </div>
                                </div>


                                <div className="col-span-2 text-center mt-7">
                                    <button className=" px-12 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-[#0f6780] hover:text-white border-2 border-[#0f6780] focus:outline-none">
                                        Update
                                    </button>
                                </div>





                            </div>
                        </div>
                    </form>
                </div>
            </section>



        </div>
    );
};

export default UpdateTouristSpotDataPage;



