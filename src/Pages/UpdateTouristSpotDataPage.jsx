import { useForm } from "react-hook-form"
import UseAuth from "../AuthProvider/UseAuth";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateTouristSpotDataPage = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm()

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



    const onSubmit = (data) => {

        const country_Name = data.country_Name;
        const location = data.location;
        const tourists_spot_name = data.tourists_spot_name;
        const locationImgLink = data.locationImgLink;
        const shortDescription = data.shortDescription;
        const seasonality = data.seasonality;
        const travel_time = data.travel_time;
        const totalVisitorsPerYear = data.totalVisitorsPerYear;
        const average_cost = data.average_cost;
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

        fetch(`http://localhost:5000/updateSingleData/${_id}`, {
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
                            <div className=" mb-10 text-3xl ">
                                <a className="flex items-center text-gray-700" href="#">
                                    <div className="avatar w-10 rounded-full">
                                        <img className="w-10 rounded-full" src="https://r2.erweima.ai/imgcompressed/compressed_0256073c49c71077d0e96e412aa4d94d.webp" alt="Photo of Praveen Juge" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
                                        <p className="text-sm text-gray-500">Jan 02 2021</p>
                                    </div>
                                </a>
                                <h1 className="text-4xl font-semibold text-center text-gray-900">Update Tourists Spot Data</h1>
                            </div>


                            {/* input items here  */}
                            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">


                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Country Name</span>
                                        </div>
                                        <input {...register("country_Name", { required: true })} defaultValue={country_Name} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Country Name" />
                                        {errors.country_Name && <span className="text-red-800 ml-2">Country Name is required</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Location</span>
                                        </div>
                                        <input {...register("location", { required: true })} defaultValue={location} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location" />
                                        {errors.location && <span className="text-red-800 ml-2">Location is required</span>}
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Tourists Spot Name</span>
                                        </div>
                                        <input {...register("tourists_spot_name", { required: true })} defaultValue={tourists_spot_name} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Tourists Spot Name" />
                                        {errors.tourists_spot_name && <span className="text-red-800 ml-2">Tourists Spot Name is required</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Location Img Link</span>
                                        </div>
                                        <input {...register("locationImgLink", { required: true })} defaultValue={locationImgLink} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location Img Link" />
                                        {errors.locationImgLink && <span className="text-red-800 ml-2">Location Img Link is required</span>}
                                    </div>
                                </div>


                                <div className="col-span-2">
                                    <label className="text-gray-700" >
                                        <div className="label">
                                            <span className="label-text ml-3">Short Description</span>
                                        </div>
                                        <textarea {...register("shortDescription", { required: false })} defaultValue={shortDescription} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" id="comment" placeholder="Enter your short description" name="comment" rows="5" cols="40">
                                        </textarea>
                                        {/* {errors.shortDescription && <span className="text-red-800 ml-2">Short description is required</span>} */}
                                    </label>
                                </div>


                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Season</span>
                                        </div>
                                        <input {...register("seasonality", { required: true })} defaultValue={seasonality} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Which season is suitable ? " />
                                        {errors.seasonality && <span className="text-red-800 ml-2">Season Name is required</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Travel Time</span>
                                        </div>
                                        <input {...register("travel_time", { required: true })} defaultValue={travel_time} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Travel Time" />
                                        {errors.travel_time && <span className="text-red-800 ml-2">Travel Time is required</span>}
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Total Visitors Per Year</span>
                                        </div>
                                        <input {...register("totalVisitorsPerYear", { required: true })} defaultValue={totalVisitorsPerYear} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Total Visitors Per Year" />
                                        {errors.totalVisitorsPerYear && <span className="text-red-800 ml-2">Total Visitors Per Year</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <div className="label">
                                            <span className="label-text ml-3">Average Cost</span>
                                        </div>
                                        <input {...register("average_cost", { required: true })} defaultValue={average_cost} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Average Cost" />
                                        {errors.average_cost && <span className="text-red-800 ml-2">Average Cost</span>}
                                    </div>
                                </div>


                                <div className="col-span-2 text-center my-2">
                                    <button className="btn  transition ease-in duration-200 uppercase rounded-full hover:bg-[#0f6780] hover:text-white border-2 border-[#0f6780] focus:outline-none">
                                        Update Now
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



