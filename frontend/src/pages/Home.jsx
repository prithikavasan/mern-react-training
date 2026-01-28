import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { userContext } from '../App'
import Users from '../components/Users'// ✅ make sure this file exists

const Home = () => {

  const [user, setUser] = useState("abcd")

  return (
    <div>
      <h1>Home</h1>
      <p>home page is rendering</p>

      <ul>
        <li>
          <Link to="/state">State</Link>
        </li>

        <li>
          <Link to="/effect">Effect</Link>
        </li>

        <li>
          <Link to="/linkanddislike">LinkAndDislike</Link>
        </li>
      </ul>

      {/* ✅ Context Provider */}
      <userContext.Provider value={user}>
        <Users age={33} />
      </userContext.Provider>

    </div>
  )
}

export default Home
