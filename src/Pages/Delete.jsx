import Swal from "sweetalert2";


const Delete = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const country_Name = form.country_Name.value;
        const image = form.image.value;
        const shortDescription = form.shortDescription.value;

        const addTouristSpotData = {
            country_Name,
            image,
            shortDescription
        }

        // console.log(addTouristSpotData);
        fetch('http://localhost:5000/newrout', {
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
                }
                form.reset();
            })


    }


    return (
        <>


            <form onSubmit={handleSubmit}>
                <div className="w-full max-w-2xl px-5 py-10 mx-auto m-10 bg-white rounded-lg shadow dark:bg-gray-800">


                    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">

                        <div className="col-span-2 lg:col-span-1">
                            <div className=" relative ">
                                <input type="text" name="country_Name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="country_Name" required />
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <div className=" relative ">
                                <input type="text" name="image" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Img Link" required />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label className="text-gray-700" >
                                <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#0f6780] focus:border-transparent" placeholder="Enter your short description" name="shortDescription" rows="5" cols="40" required>
                                </textarea>
                            </label>
                        </div>

                        <div className="col-span-2 text-center mt-7">
                            <button className=" px-12 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-[#0f6780] hover:text-white border-2 border-[#0f6780] focus:outline-none">
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






