import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/AxiosInstance";
import { endPoints } from "../api/Endpoints";







const initialState = {
    cart: [],
    loading: false,
    error: null,
    cartUser: null,
    statusCode: null,
    toastSuccessmsg: " ",

};




export const fetchMyCart = createAsyncThunk(

    "cart/fetchMyCart",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(endPoints.CART.MY_CART);
            console.log("fetching my cart async thunk ", response);
            return response.data;

        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const increaseProductQuantity = createAsyncThunk(
    "cart/increaseProductQuantity",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(
                endPoints.CART.INCREMENT_PRODUCT_QUANTITY(productId)
            );

            console.log(endPoints.CART.INCREMENT_PRODUCT_QUANTITY(productId));
            console.log("response from the increment product quantity thunk ", response.data)

            if (response.data.statusCode == 200) {
                // return response.data.data 
                return productId;
            }

            if (response.data.statusCode == 422 || 404 || 400) {
                rejectWithValue(response.data.error);
            }

        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message)
        }
    }
);

export const decrementProductQuantity = createAsyncThunk(
    "cart/decrementProductQuantity",
    

        async (productId , {rejectWithValue}) => {
            try { 
                console.log("product decremet clicked")
              const response = await axiosInstance.post(
                endPoints.CART.DECREMENT_PRODUCT_QUANTITY(productId));

                if (response.data.statusCode == 200) {
                    // return response.data.data 
                    return productId;
                }
    
                if (response.data.statusCode == 422 || 404 || 400) {
                    rejectWithValue(response.data.error);
                }
    
        }
    catch (error) {
        console.log(error);
        return rejectWithValue(error.message)
    }
}

)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build
            //fetching cart
            .addCase(fetchMyCart.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchMyCart.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.cart = action.payload.data.items;
                state.statusCode = action.payload.statusCode
                console.log("state.error", state.error)
                console.log("state.cart", state.cart)
                console.log("state.statuscode", state.statusCode)


            })
            .addCase(fetchMyCart.rejected, (state, action) => {
                state.loading = false;
                error = action.payload;
            })


            //increment quantity 
            .addCase(increaseProductQuantity.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(increaseProductQuantity.fulfilled, (state, action) => {
                console.log("action payload on increment quantity", action.payload);

                const existingProduct = state.cart.findIndex(p => p.productId == action.payload);

                if (existingProduct !== -1) {
                    state.toastSuccessmsg = `Quantity updated successfully ${state.cart[existingProduct].productName}`;
                    state.cart[existingProduct].quantity += 1; // Update the specific product
                }

                console.log(existingProduct
                )
                console.log("toast message", state.toastSuccessmsg)
                state.error = null;
                state.loading = false;

            })
            .addCase(increaseProductQuantity.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                console.log(action.payload);
            })

            //decrement quantity
            .addCase(decrementProductQuantity.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(decrementProductQuantity.fulfilled, (state, action) => {
                console.log("action payload on increment quantity", action.payload);

                const existingProduct = state.cart.findIndex(p => p.productId == action.payload);
                
                if (existingProduct !== -1) {
                    state.toastSuccessmsg = `Quantity updated successfully ${state.cart[existingProduct].productName}`;
                    state.cart[existingProduct].quantity -= 1; // Update the specific product
                }

                console.log(existingProduct
                )
                console.log("toast message", state.toastSuccessmsg)
                state.error = null;
                state.loading = false;

            })
            .addCase(decrementProductQuantity.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                console.log(action.payload);
            })
    }


})

export default cartSlice.reducer;