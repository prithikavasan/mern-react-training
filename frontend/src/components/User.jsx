import React from 'react'

const User = ({name,department,skills}) => {
  return (
   <div>
   <h1> I am {name} from {department} department</h1>
   <ol>
    {skills.map((s)=>(
        <li>{s}</li>
    )
    )}
   </ol>
   </div>
  )
}

export default User;