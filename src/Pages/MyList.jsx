import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useForm } from "react-hook-form"
import UseAuth from "../AuthProvider/UseAuth";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


const MyList = () => {
    const { user } = UseAuth() || {};
    const [dataByEmail, setDataByEmail] = useState([]);



    // for load data through email 
    useEffect(() => {
        fetch(`http://localhost:5000/myListData/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setDataByEmail(data);
            })
    }, [user])



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const name = data.country_Name;

        console.log(
            name,
            data.location,
            data.tourists_spot_name,
            data.locationImgLink,
            data.shortDescription,
            data.seasonality,
            data.travel_time,
            data.totalVisitorsPerYear,
            data.average_cost,
        )

    }









    return (
        <div>

            <div className="container w-full px-4 mx-auto sm:px-8">
                <div className="py-8">
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Date
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Country Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Location
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Tourist Spot Name
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            season
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Visitor/Year
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            average cost
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Update
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        dataByEmail.map(singleData => <tr key={singleData._id}>

                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    11/12/2025
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Dhaka
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    DU
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Sundorbon er best heading
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Winter
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    70K+
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    3000 tk
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">

                                                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex items-center p-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                                    <CiEdit size={20} />

                                                </button>

                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">

                                                <button className="flex items-center p-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                                    <MdOutlineDeleteForever size={20} />
                                                </button>

                                            </td>
                                        </tr>)
                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">

                    <div className="modal-action">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}





                            <form>
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
                                        <h1 className="text-4xl font-semibold text-center text-gray-900">Add Tourists Spot</h1>
                                    </div>


                                    {/* input items here  */}
                                    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">


                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Country Name</span>
                                                </div>
                                                <input {...register("country_Name", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Country Name" />
                                                {errors.country_Name && <span className="text-red-800 ml-2">Country Name is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Location</span>
                                                </div>
                                                <input {...register("location", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location" />
                                                {errors.location && <span className="text-red-800 ml-2">Location is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Tourists Spot Name</span>
                                                </div>
                                                <input {...register("tourists_spot_name", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Tourists Spot Name" />
                                                {errors.tourists_spot_name && <span className="text-red-800 ml-2">Tourists Spot Name is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Location Img Link</span>
                                                </div>
                                                <input {...register("locationImgLink", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Location Img Link" />
                                                {errors.locationImgLink && <span className="text-red-800 ml-2">Location Img Link is required</span>}
                                            </div>
                                        </div>


                                        <div className="col-span-2">
                                            <label className="text-gray-700" >
                                                <div className="label">
                                                    <span className="label-text ml-3">Short Description</span>
                                                </div>
                                                <textarea {...register("shortDescription", { required: false })} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" id="comment" placeholder="Enter your short description" name="comment" rows="5" cols="40">
                                                </textarea>
                                                {/* {errors.shortDescription && <span className="text-red-800 ml-2">Short description is required</span>} */}
                                            </label>
                                        </div>


                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Season</span>
                                                </div>
                                                <input {...register("seasonality", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Which season is suitable ? " />
                                                {errors.seasonality && <span className="text-red-800 ml-2">Season Name is required</span>}
                                            </div>
                                        </div>
                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Travel Time</span>
                                                </div>
                                                <input {...register("travel_time", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Travel Time" />
                                                {errors.travel_time && <span className="text-red-800 ml-2">Travel Time is required</span>}
                                            </div>
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Total Visitors Per Year</span>
                                                </div>
                                                <input {...register("totalVisitorsPerYear", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Total Visitors Per Year" />
                                                {errors.totalVisitorsPerYear && <span className="text-red-800 ml-2">Total Visitors Per Year</span>}
                                            </div>
                                        </div>
                                        <div className="col-span-2 lg:col-span-1">
                                            <div className=" relative ">
                                                <div className="label">
                                                    <span className="label-text ml-3">Average Cost</span>
                                                </div>
                                                <input {...register("average_cost", { required: true })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Average Cost" />
                                                {errors.average_cost && <span className="text-red-800 ml-2">Average Cost</span>}
                                            </div>
                                        </div>


                                        <div className="col-span-2 text-center my-2">
                                            <button className="btn  transition ease-in duration-200 uppercase rounded-full hover:bg-[#0f6780] hover:text-white border-2 border-[#0f6780] focus:outline-none">
                                                Go Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>


                            <div className="col-span-2 text-center my-2">
                                <button className="btn px-12 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-[#0f6780] hover:text-white border-2 border-[#0f6780] focus:outline-none text-center my-2">UPDATE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog >





        </div >
    );
};

export default MyList;