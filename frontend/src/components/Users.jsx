import React, { useContext } from 'react'
import { userContext } from '../App'

const Users = ({ age }) => {
  const user = useContext(userContext) // ✅ THIS is correct

  return (
    <div>
      <h2>Users Component</h2>
      <p>Name: {user}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export default Users
