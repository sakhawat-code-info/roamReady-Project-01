
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Countries from './Components/Countries'
import LetsGoWithUs from './Components/LetsGoWithUs'
import OurPartners from './Components/OurPartners'
import QuickAns from './Components/QuickAns'
import SingleTouristSpot from './Components/SingleTouristSpot'
import Slider from './Components/Slider/Slider'
import PricingChart from './Components/PricingChart'


function App() {

  const touristDataFromDB = useLoaderData();


  return (
    <div className='bg-base-200'>
      <div className='m-10'>
        <Slider />
      </div>

      <div className='my-4 lg:my-20'>
        <div className="flex items-center justify-center header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-gray-800">
              Tourists Spots
            </p>
            {/* <p className="text-2xl font-light text-gray-400">
                            All article are verified by 2 experts and valdiate by the CTO
                        </p> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {
            touristDataFromDB?.slice(0, 6).map(SingleTouristSpotData => <SingleTouristSpot
              key={SingleTouristSpotData._id}
              SingleTouristSpotData={SingleTouristSpotData}
            ></SingleTouristSpot>)
          }
        </div>
      </div>

      <div className=''>
        <Countries />
      </div>


      <div className=''>
        <PricingChart />
      </div>
      <div>
        <LetsGoWithUs></LetsGoWithUs>
      </div>
      <div>
        <QuickAns />
      </div>


      <div>
        <OurPartners />
      </div>
    </div>
  )
}

export default App
