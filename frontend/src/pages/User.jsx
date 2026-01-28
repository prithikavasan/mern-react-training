import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const User = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products")
        }
        return res.json()
      })
      .then(data => {
        setUser(data)
      })
      .catch(err => {
        console.error("Fetch error:", err)
      })
  }, [])
  return (
    <div>
      <h1>Users</h1>
      {user.map((u) => (
        <div key={u.id} >
          <h2>{u.username}</h2>
          <h3>{u.email}</h3>
          <h3>{u.password}</h3>
           <h3>Name: {u.name.firstname} {u.name.lastname}</h3>
          <Link to={`/UserDetails/${u.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default User
