import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to='/state'>UseState</Link> 
          <Link to='/effect'>useEffect</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home