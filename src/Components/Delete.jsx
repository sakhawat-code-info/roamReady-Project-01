

const Delete = () => {
    return (
        <>










            {
                dataByEmail?.map(singleData =>
                    <tr key={singleData._id}>

                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {singleData.userCreatePostDateAndTime}
                            </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {singleData.country_Name}
                            </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {singleData.location}
                            </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {singleData.tourists_spot_name}
                            </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {singleData.seasonality}
                            </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {singleData.totalVisitorsPerYear}K+
                            </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {singleData.average_cost} tk
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









        </>
    );
};

export default Delete;