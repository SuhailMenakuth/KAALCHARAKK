import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/AxiosInstance";
import { endPoints } from "../api/Endpoints";







const initialState = {
    cart:[],
    loading: false,
    error: null,
    cartUser: null,
    statusCode : null 
};




export const fetchMyCart =createAsyncThunk(

    "cart/fetchMyCart",
    async (_,{rejectWithValue}) =>{
        try{
             const response =  await axiosInstance.get(endPoints.CART.MY_CART);
             console.log("fetching my cart async thunk ",response);
             return response.data;

        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
);

const cartSlice  =createSlice({
    name : "cart",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build
        //fetching cart
        .addCase(fetchMyCart.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchMyCart.fulfilled,(state,action) => {
            state.loading = false;
            state.error = null;
            state.cart = action.payload.data.items;
            state.statusCode = action.payload.statusCode
            console.log("state.error" ,state.error)
            console.log("state.cart" ,state.cart)
            console.log("state.statuscode" ,state.statusCode)
            

        })
        .addCase(fetchMyCart.rejected, (state,action) => {
            state.loading = false;
            // error = action.payload;
        })
    }


})

export default cartSlice.reducer;