
import { useForm } from "react-hook-form"
import UseAuth from "../AuthProvider/UseAuth";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";


const AddTouristsSpot = () => {

    const { user } = UseAuth();
    // const navigate = useNavigate();




    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

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


        const addTouristSpotData = {
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

        // console.log(addTouristSpotData);
        fetch('http://localhost:5000/addTouristSpotData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addTouristSpotData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Data Saved Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset({
                        country_Name: "",
                        location: "",
                        tourists_spot_name: "",
                        locationImgLink: "",
                        shortDescription: "",
                        seasonality: "",
                        travel_time: "",
                        totalVisitorsPerYear: "",
                        average_cost: ""
                    });
                }
            })


    }


    return (
        <div>


            <section className="container max-w-2xl mx-auto shadow-md md:w-3/4 bg-gray-100">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <h1 className="text-4xl font-semibold text-center text-gray-900">Add Tourists Spot</h1>
                            </div>


                            {/* input items here  */}
                            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">


                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        {/* <div className="label">
                                            <span className="label-text ml-3">What is your name?</span>
                                        </div> */}
                                        <input {...register("country_Name", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Country Name" />
                                        {errors.country_Name && <span className="text-red-800 ml-2">Country Name is required</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input {...register("location", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location" />
                                        {errors.location && <span className="text-red-800 ml-2">Location is required</span>}
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input {...register("tourists_spot_name", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Tourists Spot Name" />
                                        {errors.tourists_spot_name && <span className="text-red-800 ml-2">Tourists Spot Name is required</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input {...register("locationImgLink", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location Img Link" />
                                        {errors.locationImgLink && <span className="text-red-800 ml-2">Location Img Link is required</span>}
                                    </div>
                                </div>


                                <div className="col-span-2">
                                    <label className="text-gray-700" >
                                        <textarea {...register("shortDescription", { required: false })} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Enter your short description" name="comment" rows="5" cols="40" >
                                        </textarea>
                                        {/* {errors.shortDescription && <span className="text-red-800 ml-2">Short description is required</span>} */}
                                    </label>
                                </div>


                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input {...register("seasonality", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Which season is suitable ? " />
                                        {errors.seasonality && <span className="text-red-800 ml-2">Season Name is required</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input {...register("travel_time", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Travel Time" />
                                        {errors.travel_time && <span className="text-red-800 ml-2">Travel Time is required</span>}
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input {...register("totalVisitorsPerYear", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Total Visitors Per Year" />
                                        {errors.totalVisitorsPerYear && <span className="text-red-800 ml-2">Total Visitors Per Year</span>}
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <div className=" relative ">
                                        <input {...register("average_cost", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Average Cost" />
                                        {errors.average_cost && <span className="text-red-800 ml-2">Average Cost</span>}
                                    </div>
                                </div>


                                <div className="col-span-2 text-center mt-7">
                                    <button className=" px-12 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-[#0f6780] hover:text-white border-2 border-[#0f6780] focus:outline-none">
                                        Add
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

export default AddTouristsSpot;