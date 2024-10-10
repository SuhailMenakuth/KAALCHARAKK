import axios from 'axios';
import bcrypt from 'bcryptjs';
import { createContext } from 'react';




const API_URL = 'http://localhost:3001/users'; 




export const registerUser = async (userData) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.password , saltRounds);

        const user ={
            ...userData,
            password:hashedPassword,
        }



        const response = await axios.post(API_URL, user );
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
        
    }
};




export const existingUser = async (checkingEmail)=>{
    try{
        const existingUsersResponse = await axios.get(API_URL);
        const existingUsersData = existingUsersResponse.data;
        const existingEmail = existingUsersData.some(user => user.email === checkingEmail);
        return existingEmail;

    }catch(error){
        console.error('errror in checking registered email');
        throw error;
    }
   
}



                
 export const loginUser = async ({email,password})=>{

try{


    const response = await axios.get(`http://localhost:3001/users?email=${email}`);
    //const  user=response.data
    console.log("Api response",response);
    
   const user = response.data[0]; // Assuming only one user per email
   localStorage.setItem("id",user.id)
 
   if (!user) {
     throw new Error("user not found");
     
   }
 
   // Comparing  the entered password with the stored hashed password
   const isPasswordValid = await bcrypt.compare(password, user.password);
 
   if (!isPasswordValid) {
     throw new Error("wrong password");
     
   }
 
   return user; // Successful login
   
}

catch(error){
    //throwing error to component 
    throw error;
}


}