import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="link">
        <Link to="/home">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link>
        <Link to="/service">Service </Link>
      
    </div>
  )
}

export default Navbar