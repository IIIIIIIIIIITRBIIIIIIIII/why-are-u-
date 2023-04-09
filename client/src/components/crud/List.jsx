import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { useEffect } from 'react'
import { getproduct } from '../../JS/productSlice/productSlice'

export default function List() {
  const dispatch=useDispatch()
  useEffect(() => {
dispatch(getproduct())
  }, [])
  
 const posts =  useSelector((store)=> store.product?.product)
  return (
    <div>
      {
        posts?.map((post , i) => <Post key={i} task={post} />)
      }
    </div>
  )
}