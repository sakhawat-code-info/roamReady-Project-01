

const QuickAns = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How do I find the best deals on flights?</summary>
                            <div className="px-4 pb-4">
                                <p>Start by using flight comparison websites like Skyscanner, Google Flights, or Kayak to compare prices across different airlines and booking platforms. Additionally, consider flexible travel dates, signing up for fare alerts, and booking flights well in advance to secure the best deals.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What should I pack for my trip?</summary>
                            <div className="px-4 pb-4">
                                <p>It depends on your destination and the nature of your trip, but essentials usually include clothing suitable for the climate, toiletries, any necessary medications, travel documents passport, visa, etc., a travel adapter, and a small first aid kit. Don not forget items like a reusable water bottle, sunscreen, and a portable charger.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Do I need travel insurance?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>While not always mandatory, travel insurance is highly recommended. It can protect you financially in case of trip cancellations, medical emergencies, lost luggage, or other unforeseen events. Make sure to read the policy carefully to understand what is covered.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">How do I stay safe while traveling?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Research the safety situation of your destination before you go, including any travel advisories or warnings. Be vigilant of your surroundings, especially in crowded or touristy areas, and take precautions like avoiding carrying large amounts of cash, using reputable transportation, and securing your belongings.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">What are some tips for saving money while traveling?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>Look for budget accommodation options like hostels or guesthouses, eat at local restaurants instead of touristy ones, use public transportation, and take advantage of free or low-cost attractions and activities. Consider purchasing a city pass or tourist card for discounts on attractions and transportation.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuickAns;