import React from 'react'
import {useState} from "react"
const State = () => {
    const [count, setCount]=useState(0);
  return (
    <div>
        <h1>UseState</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
    </div>
    
  )
}

export default State