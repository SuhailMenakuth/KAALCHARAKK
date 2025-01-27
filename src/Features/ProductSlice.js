import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/AxiosInstance";
import { endPoints } from "../api/Endpoints";


 const initialState = {
    products: [],
    loading: false,
    error: null

}

export const fetchAllProduct = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {

            const response =  await axiosInstance.get(endPoints.PROCUT.GET_ALL_PRODUCTS);
            console.log("response from the fetchAllProduct",response.data);
            return response.data;


        } catch (error) {
            console.log("error from fetchallproducts thunk");
            return rejectWithValue(error.message);

        }


    })


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers:(builder) =>  {
        builder

        .addCase(fetchAllProduct.pending , (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllProduct.fulfilled, (state , action) => {

            state.products = action.payload.data;
            state.loading = false;
            state.error = null;

        } )
        .addCase(fetchAllProduct.rejected, (state, action) => {
            state.loading = false; 
           state.error = action.payload;
        })
    }

})


export default productSlice.reducer;