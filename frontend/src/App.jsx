import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";

import Users from './components/Users'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import State from "./Hooks/State";

import Effect from "./Hooks/Effect";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import Reducer from "./pages/Reducer";
import LinkAndDislike from "./Hooks/LinkAndDislike";
import { createContext } from "react";

export const userContext=createContext()

const App = () => {
  return (
    <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/state" element={<State/>}/>
      <Route path="/effect" element={<Effect/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/productDetails/:id" element={<ProductDetails/>}/>
      <Route path="/reducer" element={<Reducer/>}/>
      <Route path="/linkAndDislike" element={<LinkAndDislike/>}/>

      <Route path="/user" element={<User/>}/>
      <Route path="/userDetails/:id" element={<UserDetails/>}/>

    </Routes>

      {/* <User name="Prithika" department="IT" 
      skills={["Java","C","HTML","Css","JS"]}/>
      <Arr food={["Noodles","Briyani"]}/>
      <State/>
      <LinkAndDislike/>
      <Contact/>
      <Effect/> */}
     </>

  )
}

export default App;