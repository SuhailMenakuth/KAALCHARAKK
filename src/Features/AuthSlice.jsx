import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/AxiosInstance";
import { handleError } from "../utils/ErrorHandler";
import { endPoints } from "../api/Endpoints";





const initialState = {
    user : null,
    isAuthenticated: false,
    loading : false,
    error : null,
};

export const userRegisteration = createAsyncThunk(
    "auth/userRegisteration",
    async(registerdata, {rejectWithValue}) =>{
        try{
            console.log(endPoints.AUTH.REGISTER);
            
            const response = await axiosInstance.post(endPoints.AUTH.REGISTER,registerdata);
            return response.data;
            console.log("this is response data",response.data);
        }
        catch(error){
            console.log(error)
            return rejectWithValue(handleError(error));
        }
    }
    
);


const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {},
    extraReducers:(builder) => {
        builder

        // user registration 
        .addCase(userRegisteration.pending, (state) => {
            state.loading =true;
            state.error = null;
        } )
        .addCase(userRegisteration.fulfilled, (state,action) => {
            state.loading = false;
            console.log("this is action.payload",action.payload);
            // state.user = action.payload.user;
        })
        .addCase(userRegisteration.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

    }
})


export default authSlice.reducer;
