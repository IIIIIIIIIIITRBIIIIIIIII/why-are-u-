import React from 'react'
import "./Nav.css"
import { IoMdBeer } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {GrBasket} from 'react-icons/gr'
import { logout } from '../JS/userSlice/userSlice'
const Nav = () => {
  const user = useSelector((store) => store.user.user)
  const dispatch = useDispatch()
  return (
    <>

          <nav>
          {user ? <><div className='b'>
            <IoMdBeer size={50} className='IoMdBeer'/>
            <p className='ghg'>BIRRA HKOK</p>
            <Link to='Chrab' className='GrBasket'>
            <GrBasket size={50} className='GrBasket'/>
            </Link>
            </div>
             
            <div className='s'>
            
            <input type='search' placeholder='search'/> 
            
            </div> 
            <Link to='/' className='fdfd'>
            <button onClick={()=> dispatch(logout())}>log out</button>
            </Link> </> : <><Link to='/login'>
      <button>login</button>
    </Link></>}
            
          </nav>
    </>
  )
}

export default Nav