import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch user")
        }
        return res.json()
      })
      .then(data => setUser(data))
      .catch(err => console.error("Fetch error:", err))
  }, [id])

  if (!user) {
    return <h2>Loading user details...</h2>
  }

  return (
    <div>
      <h1>User Details</h1>
      <h2>Username: {user.username}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Name: {user.name.firstname} {user.name.lastname}</h2>
      <p>Password: {user.password}</p>
    </div>
  )
}

export default UserDetails
