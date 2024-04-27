
import './App.css'
import LetsGoWithUs from './Components/LetsGoWithUs'
import OurPartners from './Components/OurPartners'
import QuickAns from './Components/QuickAns'
import RecommendedBestPlaces from './Components/RecommendedBestPlaces'
import Slider from './Components/Slider/Slider'


function App() {


  return (
    <>
      <div className='m-10'>
        <Slider />
      </div>

      <div>
        <RecommendedBestPlaces />
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
