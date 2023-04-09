import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div>
        <h1 className='goga'>this is haram but your payment run successfully</h1>
        <Link to="/">
        <button className='toutou'>home</button>
        </Link>
    </div>
  )
}

export default Success