import React, { useState } from 'react'
import { useEffect } from 'react'
const Effect = () => {
  const [count,SetCount]=useState(0)
  const [users,setUsers]=useState([])
  /*useEffect(()=>{
    console.log("Components mount")
      return ()=>{
        console.log('component unmount')
      }
  })*/
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
    setUsers(data)
    console.log(data)
    }
  )
  },[])
  return (
    <div>
      <h1>UseEffect</h1>
      <h3>count:{count}</h3>
      <button onClick={()=>SetCount(prev=>prev+1)}>Increment</button>
      <h1>Users</h1>
      <ul>
        {users.map((user)=>(
          <li>Name:{user.name} Email:{user.email}<hr/></li>
        ))}
      </ul>
    </div>
  )
}

export default Effect