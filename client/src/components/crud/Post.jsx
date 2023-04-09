import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FiEdit2} from 'react-icons/fi'
import {GiConfirmed , GiCancel} from 'react-icons/gi'
import {RiDeleteBack2Fill} from 'react-icons/ri'

import { deleteproduct, updateproduct } from '../../JS/productSlice/productSlice'

export default function Post({task}) {
const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
const [OnUp, setUp] = useState(false);
const [Edit, setEdit] = useState(task);
  return (
    <div>
      {OnUp ? 
      <>
<div >
<h4 >@ editing:</h4>
       <textarea rows={3}   defaultValue={task.title} onChange={(e) =>  setEdit({...Edit , title: e.target.value})}/>
    <div >
        <button   onClick={() => setUp(false)}>
         <GiCancel  />
        </button>
        <button   onClick={() => {dispatch(updateproduct(Edit)); setUp(false) }}>
         <GiConfirmed  />
         </button>
    </div>
</div>  
      </>
       :   <>
          <div>
              <h4>@{user.name} posted:</h4>
                     <p>{task.title}</p>
                      <div >
                          <button  onClick={ () => setUp(true)}>
                                          <FiEdit2 />
                          </button>
                          <button   onClick={() => dispatch(deleteproduct(task))}>
                                          <RiDeleteBack2Fill  />
                          </button>
                      </div>
          </div>
        </>
        }
     
    </div>
  )
}