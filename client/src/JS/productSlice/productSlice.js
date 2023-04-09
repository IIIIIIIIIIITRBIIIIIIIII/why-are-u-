import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getproduct=createAsyncThunk('product/get',async()=>{
    try{
let result=axios.get('http://localhost:5000/product/all')
return result
    }catch(error){
    console.log(error)
    }
})

export const addproduct=createAsyncThunk('product/add',async(user)=>{
    try{
let result=axios.post('http://localhost:5000/product/add',user)
return result
    }catch(error){
    console.log(error)
    }
})
export const deleteproduct=createAsyncThunk('product/delete',async(id)=>{
    try{
let result=axios.delete(`http://localhost:5000/product/${id}`)
return result
    }catch(error){
    console.log(error)
    }
})

export const updateproduct=createAsyncThunk('product/update',async(id, product)=>{
    try{
let result=axios.put(`http://localhost:5000/product/${id}`,product)
return result
    }catch(error){
    console.log(error)
    }
})


const initialState = {
 product:null,
 status:null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:{
    [getproduct.pending]:(state)=>{
        state.status="pending";
    },
    [getproduct.fulfilled]:(state,action)=>{
        state.status="success";
        state.product=action.payload.data?.product
    },
    [getproduct.rejected]:(state,action)=>{
        state.status="failed";
    },
    [addproduct.pending]:(state)=>{
        state.status="pending";
    },
    [addproduct.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [addproduct.rejected]:(state,action)=>{
        state.status="failed";
    },
    [deleteproduct.pending]:(state)=>{
        state.status="pending";
    },
    [deleteproduct.fulfilled]:(state,action)=>{
        state.status="success";
    },
    [deleteproduct.rejected]:(state,action)=>{
        state.status="failed";
    },
    [updateproduct.pending]:(state)=>{
        state.status="pending";
    },
    [updateproduct.fulfilled]:(state,action)=>{
        state.status="success";
        state.product=action.payload.data?.product
    },
    [updateproduct.rejected]:(state,action)=>{
        state.status="failed";
    }

  }
})
// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer