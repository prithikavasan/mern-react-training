import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Arr from './components/Arr'
import User from './components/User'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import State from "./Hooks/State";
import LinkAndDislike from "./Hooks/LinkAndDislike";
import Effect from "./Hooks/Effect";

const App = () => {
  return (
    <>
   <Navbar/>
   <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/services" Component={Services}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/state" element={<State/>}></Route>
      <Route path="/effect" element={<Effect/>}/>
    </Routes>

      <User name="Prithika" department="IT" 
      skills={["Java","C","HTML","Css","JS"]}/>
      <Arr food={["Noodles","Briyani"]}/>
      <State/>
      <LinkAndDislike/>
      <Contact/>
      <Effect/>
     </>

  )
}

export default App;