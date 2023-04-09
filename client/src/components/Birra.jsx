import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {  addproduct, updateproduct } from '../JS/productSlice/productSlice'
import './Birra.css'
import List from './crud/List'

const Birra = () => {
  const location=useLocation()
  console.log(location.state)
  const el = location.state
  const [test, setTest] = useState({title:""})
  const dispatch = useDispatch()
  const [showedit, setshowedit] = useState(false)
  const [edit, setedit] = useState({
    title:el?.title,
    price:el?.price,
    description:el?.description,
    image:el?.image,
    id:el?._id
  })
   return (
    <div>
    <div className='ja'>
<img src={el.img}className="ma" alt='hy'/>
<h1> {el.title} </h1>
<br/>
<p>{el.description}</p>
<br/>
<p>{el.price}</p>

<button onClick={()=>setshowedit(true)}>edit</button>
{
  showedit? (<div>

    <input type='text'  placeholder={el?.title} onChange={(e)=>setedit({...edit,title:e.target.value})}/>
    <input type='text'  placeholder={el?.price} onChange={(e)=>setedit({...edit,price:e.target.value})}/> 
    <div>
     <button onclick={()=>dispatch(updateproduct({id:el?._id, product:edit}))} > valider </button>
     </div>
  </div>
):null
}

<Link to="/">
  <button>home</button>
</Link>
    </div>

    {/* <form  onSubmit={(e) => {
    e.preventDefault()
    dispatch(addproduct({...test , id:Math.floor(Math.random()* 100000000 )}))}}>
        <input type="text" required onChange={(e) => setTest({...test, title:e.target.value})}/>
<button type='submit'>SUBMIT</button>
    </form> */}

    <List />
    </div>
  )
}

export default Birra