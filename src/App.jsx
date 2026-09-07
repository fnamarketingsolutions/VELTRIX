import { useLenis } from './hooks/useLenis'
import GridOverlay from './components/GridOverlay'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Speedster from './components/Speedster'
import Roadster from './components/Roadster'
import Species from './components/Species'
import Lightness from './components/Lightness'
import LightnessVideo from './components/LightnessVideo'
import Heritage from './components/Heritage'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import FoundersSection from './components/FounderSection'

function App() {
  useLenis()

  return (
    <div className="page relative w-full">
      <GridOverlay />
      <Nav />
      <main>
        <Hero />
        <Speedster />
        <Roadster />
        <Species />
        <Lightness />
        <LightnessVideo />
        <Heritage />
        <Gallery />
        <FoundersSection/>
        <Footer />
      </main>
    </div>
  )
}



export default App
