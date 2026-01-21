import React from 'react'
import { useState } from 'react'
const LinkAndDislike = () => {
    const [LikeCount, setLikeCount]=useState(0)
    const [DislikeCount,setDislikeCount]=useState(0)
  return (
    <div>
        <h1>Like and Dislike</h1>
        <button onClick={()=>setLikeCount(prev=>prev+1)}>Like👍{LikeCount}</button>
    
        <button onClick={()=>setDislikeCount(p=>p+1)}>Dislike👎{DislikeCount}</button>
        
    </div>
  )
}

export default LinkAndDislike