import React, { useContext, useState , useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../Services/Api';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
  const [invalidmsg, setWrong] = useState(''); // Track invalid email or password
  const navigate = useNavigate();
 
 
  

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values) => {
    const { email, password } = values;

    try {
      const user = await loginUser({ email, password });
      if (!user) throw new Error('Invalid login details');

      // Store user email and ID in localStorage
      localStorage.setItem('email', user.email);
      localStorage.setItem('id', user.id);

      // Success toast on login
       toast.success('Login successful!', { position: 'top-right', autoClose: 3000 });

      // Redirect based on user role or status
      if (user.role === 'admin') {
        navigate('/admin');
        console.log('Admin logged in successfully');
      } else if (user.isBlocked) {
        throw new Error('You are blocked');
      } else {
        console.log('Login successful:', user);
        navigate('/');
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      setWrong(error.message);

      // Error toast on login failure
       toast.error(error.message, { position: 'top-right', autoClose: 3000 });
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
                  name="email"
                  placeholder="Email address"
                  className={`border border-greenDark placeholder:text-slate-400 w-full mb-4 p-2 ${
                    errors.email && touched.email ? 'border-red-500' : ''
                  }`}
                />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`border border-greenDark placeholder:text-slate-400 w-full mb-4 p-2 ${
                    errors.email && touched.email ? 'border-red-500' : ''
                  }`}
                />

                <button
                  type="submit"
                  className="w-full mb-4 p-2 bg-greenDark border border-greenDark rounded-md font-bold text-white hover:bg-opacity-85"
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
              className="w-full mb-4 p-2 border border-greenDark bg-greenDark hover:bg-opacity-95 font-bold text-white rounded-md"
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
