
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Home } from "../components/Home"
import { Projects } from "../components/Projects"
import { Services } from "../components/Services"
import { Video } from "../components/Video"

function App() {
  
  return (
    <div >
      <Header/>
      <Home/>
      <Video />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
