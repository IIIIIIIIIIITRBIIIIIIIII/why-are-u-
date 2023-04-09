import React from 'react'
import { Link } from 'react-router-dom'
const First = () => {
  return (
    <>
    <div className='hh'> 
    <center>
       <img src='https://radissonsfax.tn/wp-content/uploads/2022/08/absolut-0.5.jpg' alt='abosolute-vodka' className='ab'/>
       </center>
       <center>
        <p className='la'>this web site is -18</p>
       <p className='hkok'>Welcome to birra hkok</p>
       <Link to="/login">
        <button>Log in</button>
        </Link>
       </center>
       </div>
    </>
  )
}

export default First