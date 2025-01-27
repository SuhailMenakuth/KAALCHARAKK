import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/AxiosInstance";
import { handleError } from "../utils/ErrorHandler";
import { endPoints } from "../api/Endpoints";
import Cookies from 'js-cookie';





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
        }
        catch(error){
            console.log("this is error occured during user Registration", error);
           
            if(error.response.data.message){
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue(error.message);
        }
    }
    
);

export const login = createAsyncThunk(
    "auth/login",
    async(logindata, {rejectWithValue}) =>{
        try{

            console.log(logindata);
            const response = await axiosInstance.post(endPoints.AUTH.LOGIN,logindata);
            // console.log(response.data);
             return response.data;
           
        }
        catch(error){
            if (error.response?.data?.message) {
                console.log(error.response?.data?.message);
                return rejectWithValue(error.response.data.message);
            }
            return rejectWithValue(error.response)
        }
    }

)

export const myDetatils = createAsyncThunk(
    "auth/mydetails",
    async(_,{rejectWithValue}) => {
        try{
            // const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];
            // console.log(accessToken);
            // const response = await axiosInstance.get(endPoints.AUTH.MYDETAILS, {
            //     headers: {
            //         Authorization: `Bearer ${accessToken}`,
            //     },
            // });
            const response = await axiosInstance.get(endPoints.AUTH.MYDETAILS);
            console.log("this is myDetails ",response);
            return response.data.data;
        }
        catch(error){
            console.log("this is error of myDetails ", error.message);
            return rejectWithValue(error.message);
        }
    }
);




export const authSlice = createSlice({
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


        // login
          .addCase(login.pending,(state) => {
            state.loading = true; 
            state.error = null; 
          })
          .addCase(login.fulfilled, (state , action) =>{
            console.log("this is action.payload",action.payload);
            state.loading = false ;
            console.log("this is fullfilled");
          })
          .addCase(login.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload;
          })
       

          //my details
          .addCase(myDetatils.pending,(state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(myDetatils.fulfilled, (state , action) =>{
             console.log("this is action.payload of mydetails fullfilled ",action.payload);
            state.user = action.payload;
            state.loading = false ;
            
          
          })
          .addCase(myDetatils.rejected, (state,action) =>{
            console.log("this is action.payload of mydetails",action.payload)
            state.loading = false;
            if(action.payload != "success"){

                state.error = action.payload;
            }
            state.error = action.payload;
          })


    }
})


export default authSlice.reducer;

