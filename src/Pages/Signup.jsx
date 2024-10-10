// done form and validation using formik and Yup 
//import uuid library automtic generation of ids 
// created togglebutton for having MR and MS
// user data is stored in database in Database folder 
// created services  folder for axios services 
//created a servicer for adding data to database and for checking email 
// created a new state to track the email is already used or not 
// created a constants folder for having constans like icon and free shipping
// optimizing the login process when dealing with a large number of users. Instead of iterating through every user in the database, we can implement a more efficient approach using hashing and salting for password security.

// what left to do 
// need to have more styling  // mainly ,  hover effects for button and input fields
// find a optimal way for fetching the email id is still existing // the problem with this code is , if there is  a lakh users it is checking for every email id, its time complexity will be bigo(n)
// need to navigate to login page 



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import ToggleButtons from '../Components/Buttons/ToggleButtons';
import { registrationConstans } from '../Constants/index';
import { registerUser, existingUser } from '../Services/Api';
import { v4 as uuidv4 } from 'uuid';
import Whishlist from './Whishlist';

const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: ""
};

const signupValidation = Yup.object({
    fname: Yup.string().required("please enter First Name"),
    lname: Yup.string().required("please enter Last Name"),
    email: Yup.string().email("please Enter valid Email").required("please enter Email"),
    password: Yup.string().min(8).max(15).required("Please enter Password"),
    cpassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm Password is required"),
});

const Signup = () => {
    
    const [activeDiv, setActiveDiv] = useState(null); // this state is for checking mr and ms
    const [emailExists, setEmailExists] = useState(false);  // New state to track email existence
    const navigate = useNavigate();





    const handleSubmit = async (values) => {
        try {
            const userId = uuidv4();
            const { fname, lname, email, password } = values;
            const userData = {
                id: userId,
                fname,
                lname,
                email,
                password,
                title: activeDiv,
                cart : [],
                whishlist : [],
                address : [],
            };

            // Check if the email already exists
            const existingUsersResponse = await existingUser(email);
            if (existingUsersResponse) {
                setEmailExists(true);  // Set error state if email exists // for not display the  error message 
            } else {
                setEmailExists(false); // Reset error state  if the email is unique nothing need to display
                const response = await registerUser(userData);
                console.log('User registered:', response);

                //navigating to login 
                navigate('/login')
                
            }
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };






    return (
        <div className='bg-slate-500 w-full h-screen flex'>
            {/* Left div with benefits baner */}
            <div className='w-1/2 bg-greenLight h-screen hidden lg:flex'>
                <ul className='mt-20 ml-12'>
                    <h1 className='font-montserrat font-bold text-gold text-2xl'>YOUR BENEFITS</h1>
                    {registrationConstans.map((elem) => (
                        <li className='flex items-center mt-6' key={elem.id}>
                            <img src={elem.icon} className='w-8 h-8 mr-2 text-gold fill-current' alt="icon" />
                            <h1 className='text-center text-gold'>{elem.label}</h1>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Signup form */}
            <div className='flex justify-center items-center lg:w-1/2 bg-greenDark h-screen'>
                <div className='w-full h-4/5 rounded-lg p-6 flex flex-col items-center justify-center'>
                    <div className='w-full h-36 flex flex-col justify-center mb-10'>
                        <h1 className='text-center font-montserrat font-bold text-gold text-2xl'>CREATE AN ACCOUNT</h1>
                        <p className='text-center text-sm text-gold'>Enter your information below to proceed. If you already have an account, please log in instead.</p>
                    </div>

                    {/* Error message for existing email */}
                    {emailExists ?
                    <div className='w-full mb-4'>
                        <p className="text-red-500 text-sm  w-full">
                            This email address is already associated with an account. If this account is yours, please log in.
                        </p>
                        </div> 
                        :
                        <div className='w-full mb-4' >

                        </div>
                    }


                   {/* toggle div this is for mr and ms */}
                    <ToggleButtons activeDiv={activeDiv} setActiveDiv={setActiveDiv} />  
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signupValidation}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field
                                    type="text"
                                    name="fname"
                                    placeholder="First name"
                                    className={`border border-gold w-full mt-4 mb-4 p-2 ${errors.fname && touched.fname ? 'border-red-500' : ''}`}
                                />
                                <Field
                                    type="text"
                                    name="lname"
                                    placeholder="Last name"
                                    className={`border border-gold w-full mb-4 p-2 ${errors.lname && touched.lname ? 'border-red-500' : ''}`}
                                />
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className={`border border-gold w-full mb-4 p-2 ${errors.email && touched.email ? 'border-red-500' : ''}`}
                                />
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className={`border border-gold w-full mb-4 p-2 ${errors.password && touched.password ? 'border-red-500' : ''}`}
                                />
                                <Field
                                    type="password"
                                    name="cpassword"
                                    placeholder="Confirm password"
                                    className={`border border-gold w-full mb-4 p-2 ${errors.cpassword && touched.cpassword ? 'border-red-500' : ''}`}
                                />
                                <button
                                    type="submit"
                                    // className="  w-full p-2 bg-gold text-white rounded hover:bg-greenLight"
                                    className="relative w-full p-2 bg-gold text-white rounded bg-gradient-to-b from-gold to-gold transition-all duration-500 ease-out hover:bg-gradient-to-t hover:from-greenLight hover:to-greenLight"

                                >
                                    Create An Account
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Signup;
