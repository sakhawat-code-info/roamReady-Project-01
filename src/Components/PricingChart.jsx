
const PricingChart = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto p-6 overflow-x-auto">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Our Offers</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Travel Cost Dashboard</h2>
                    <table className="w-full">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium">General</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">tk</span>
                                        <span className="font-medium dark:text-gray-600">/trip</span>
                                    </p>
                                </th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium">Standard</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">tk</span>
                                        <span className="font-medium dark:text-gray-600">/trip</span>
                                    </p>
                                </th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium">Premium</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl dark:text-gray-900">tk</span>
                                        <span className="font-medium dark:text-gray-600">/trip</span>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="space-y-6 text-center divide-y dark:divide-gray-300">
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Bangladesh</h3>
                                </th>
                                <td>
                                    <span className="block text-sm">6 Spot / 7000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">6 Spot / 10000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">6 Spot / 25000</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Thailand</h3>
                                </th>
                                <td>
                                    <span className="block text-sm">6 Spot / 140,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">6 Spot / 180,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">6 Spot / 240,000</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Indonesia</h3>
                                </th>
                                <td>
                                    <span className="block text-sm">5 Spot / 130,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">5 Spot / 170,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">5 Spot / 220,000</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Malaysia</h3>
                                </th>
                                <td>
                                    <span className="block text-sm">6 Spot / 230,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">6 Spot / 270,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">7 Spot / 420,000</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Vietnam</h3>
                                </th>
                                <td>
                                    <span className="block text-sm">5 Spot / 230,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">6 Spot / 270,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">7 Spot / 420,000</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Cambodia</h3>
                                </th>
                                <td>
                                    <span className="block text-sm">5 Spot / 30,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">6 Spot / 50,000</span>
                                </td>
                                <td>
                                    <span className="block text-sm">7 Spot / 90,000</span>
                                </td>
                            </tr>




                            <th scope="row" className="text-left">
                                <h3 className="py-3">Life Risk</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-400">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-400">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-600">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>








                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default PricingChart;