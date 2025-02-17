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

export const deleteProductfromCart = createAsyncThunk(
    "cart/deleteProduct",
    async (productId , {rejectWithValue}) =>{
        try{

           const response = await axiosInstance.delete(
            endPoints.CART.DELETE_PRODUCT(productId)
           )
           if (response.data.statusCode == 200) {
            // return response.data.data 
            return productId;
        }
        if (response.data.statusCode == 422 || 404 || 400) {
            rejectWithValue(response.data.error);
        }


        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)


export const addToCart = createAsyncThunk(
    "cart/addtocart",
    async (product , {rejectWithValue}) =>{
        try{
            const response = await axiosInstance.post(
                endPoints.CART.ADD_TO_CART(product.productId)
            )
            if (response.data.statusCode == 200) {
                // return response.data.data 
                return product;
            }
            if (response.data.statusCode == 422 || 404 || 400|| 402) {
                rejectWithValue(response.data.error);
            }
        }catch(error){
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

            // delete product from cart 
            .addCase(deleteProductfromCart.pending,(state) => {
                state.loading = true;
                state.error = null;

            } )
            .addCase(deleteProductfromCart.fulfilled,(state,action)=>{
                state.error = null;
                state.loading = false; 
                state.toastSuccessmsg = `Product deleted successfully `;
                state.cart = state.cart.filter(p => p.productId != action.payload.productId);
                
                
            })
            .addCase(deleteProductfromCart.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
                console.log(action.payload);
            })

            //add to cart 
            .addCase(addToCart.pending,(state) =>{
                state.error = null;
                state.loading = true;

            })
            .addCase(addToCart.fulfilled,(state,action)=>{
                state.error = null;
                state.loading =false;
                console.log("result from addtocart ",action.payload)

                const existingProduct = state.cart.findIndex(p => p.productId == action.payload.productId);
                if(existingProduct != -1){
                    state.cart[existingProduct].quantity +=1;
                
                }
                else{
                  
                     state.cart.push({ ...action.payload, quantity: 1 })
                }                state.toastSuccessmsg("cart updated successfully ",action.payload.productName )
            
            })
            .addCase(addToCart.rejected, (state,action)=>{
                state.error = action.payload;
                state.loading = false;
                console.log("result from addtocart rejected",action.payload)

            })
    }
})



export default cartSlice.reducer;