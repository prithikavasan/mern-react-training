import React from 'react'

const Arr = ({food}) => {
  return (
    <div>
        {food.map((f)=>(
            <li>{f}</li>
        ))}
    </div>
  )
}

export default Arr