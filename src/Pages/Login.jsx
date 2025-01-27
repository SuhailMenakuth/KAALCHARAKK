import React, { useContext, useState , useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../Services/Api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { login, myDetatils } from '../Features/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader3 from '../Components/Loader3';

const Login = () => {
  const [invalidmsg, setInvaidmsg] = useState(''); // Track invalid email or password
  const navigate = useNavigate();
 
 const dispatch  =  useDispatch();
 const {loading} = useSelector((state) => state.auth)
  

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values) => {
  
    console.log("login pressed");
    const { username, password } = values;
    const loginData = {
      username,
      password
    };
console.log(loginData);
    try {

      
      // const user = await loginUser({ email, password });
      // if (!user) throw new Error('Invalid login details');

      // // Store user email and ID in localStorage
      // localStorage.setItem('email', user.email);
      // localStorage.setItem('id', user.id);

      // const user = 
       await dispatch(login(loginData)).unwrap();
      // const mydetails = await dispatch(myDetatils()).unwrap();
      // console.log(mydetails);

      // Success toast on login
       toast.success('Login successful!', { position: 'top-right', autoClose: 3000 });
       navigate('/');

      // Redirect based on user role or status
    //   if (user.role === 'admin') {
    //     navigate('/admin');
    //     console.log('Admin logged in successfully');
    //   } else if (user.isBlocked) {
    //     throw new Error('You are blocked');
    //   } else {
    //     console.log('Login successful:', user);
    //     navigate('/');
    //   }
    // } catch (error) {
    //   console.error('Login Error:', error.message);
    //   setWrong(error.message);

    //   // Error toast on login failure
    //    toast.error(error.message, { position: 'top-right', autoClose: 3000 });
    // }
    }catch(error){
      console.log(error);
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.error('Server Response:', error.response.data);
        console.error('Status Code:', error.response.status);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No Response:', error.request);

      } else if(error.message){
        // Something else happened
        console.error('Error:', error.message);
        setInvaidmsg(error.message);
      }
      else{
        console.log(error);
        setInvaidmsg(error);
      }
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Image container */}
      <div className="w-1/2 h-screen bg-red-600 relative hidden lg:flex">
        <div className="w-full h-full bg-gray-800 absolute">
          <img
            src="public/assets/images/LoginImage.webp"
            alt="loginImage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
     {loading && <Loader3 />}
      {/* Login container */}
      <div className="h-screen flex justify-center items-center lg:w-1/2">
        <div className="w-[90%] flex-col items-center justify-center">
          <div className="text-center space-y-6 mb-10 relative">
            <h1 className="text-center font-palanquin font-bold text-black text-2xl">LOGIN</h1>
            <p className="text-center font-montserrat text-black">
              If you have an account with us, please log in.
            </p>
          </div>
          
          
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                {/* Display invalid login message */}
                {invalidmsg ? (
                  <div className="w-full mb-3">
                    <p className="text-red-500">{invalidmsg}</p>
                  </div>
                ) : (
                  <div className="w-full mb-3"></div>
                )}

                <Field
                  type="email"
                  name="username"
                  placeholder="Email address"
                  className={`border border-greenDark placeholder:text-slate-400 w-full mb-4 p-2 ${
                    errors.username && touched.username ? 'border-red-500' : ''
                  }`}
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`border border-greenDark placeholder:text-slate-400 w-full mb-4 p-2 ${
                    errors.password && touched.password ? 'border-red-500' : ''
                  }`}
                />

                <button
                  type="submit"
                  className="w-full mb-4 p-2 bg-greenDark border border-greenDark rounded-md font-bold text-white hover:bg-opacity-95"
                >
                  LOGIN
                </button>
              </Form>
            )}
          </Formik>

          <hr className="border border-greenDark mt-4 mb-10" />

          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-center font-palanquin font-bold text-black text-2xl mt-4 mb-4">
              Still don't have an account?
            </h1>
            <p className="text-center font-montserrat text-black mb-4">
              Create a Kaalcharakk customer account to make it easier to see an overview of your
              orders, track your orders and make checking out even faster.
            </p>
            <button
              type="submit"
              className="relative w-full p-2 bg-greenDark text-white rounded bg-gradient-to-b from-go"

              // className="w-full mb-4 p-2 border border-greenDark bg-greenDark hover:bg-opacity-95 font-bold text-white rounded-md"
              onClick={() => navigate('/signup')}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>

      {/* Toast container */}
      </div>
  );
};

export default Login;
