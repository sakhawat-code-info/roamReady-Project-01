
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Countries from './Components/Countries'
import LetsGoWithUs from './Components/LetsGoWithUs'
import OurPartners from './Components/OurPartners'
import QuickAns from './Components/QuickAns'
import SingleTouristSpot from './Components/SingleTouristSpot'
import Slider from './Components/Slider/Slider'


function App() {

  const touristDataFromDB = useLoaderData();


  return (
    <>
      <div className='m-10'>
        <Slider />
      </div>

      <div>
        <div className="flex items-end justify-between mb-3 header">
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



      <div>
        <Countries />
      </div>




      <div>
        <QuickAns />
      </div>
      <div>
        <LetsGoWithUs></LetsGoWithUs>
      </div>
      <div>
        <OurPartners />
      </div>
    </>
  )
}

export default App
