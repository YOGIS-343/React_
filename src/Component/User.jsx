import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    
    <div>"your Id is : "{params.id}</div>
  )
}

export default User