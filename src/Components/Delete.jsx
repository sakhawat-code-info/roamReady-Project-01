

const Delete = () => {
    return (
        <>





            <form >
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
                                <textarea {...register("shortDescription", { required: false })} className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" id="comment" placeholder="Enter your short description" name="comment" rows="5" cols="40">
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
                            <button className="btn px-12 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-[#0f6780] hover:text-white border-2 border-[#0f6780] focus:outline-none">
                                Add
                            </button>
                        </div>





                    </div>
                </div>
            </form>























        </>
    );
};

export default Delete;