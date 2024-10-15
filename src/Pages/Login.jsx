// seting user id to localstorage for to handle individual cart and further use



import React ,{useContext, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { loginImage } from '../assets/images/index'; need to correct now using dierectly from the folder
import { loginUser } from '../Services/Api';
import { useNavigate } from 'react-router-dom';
import { ProductDetails } from '../context/ProductContext';
import { CartDetails } from '../context/CartContext';



const Login = () => {

  const [invalidmsg,setWrong]=useState(''); // to track the email or password wrong
  const navigate = useNavigate();
  const { products } = useContext(ProductDetails)
  const { fetchUser } = useContext(CartDetails)



  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });



  console.log(products)






  const handleSubmit = async (values) => {

    const { email, password } = values
    console.log("handle submit email"+email)
 
    
    try {
      const user = await loginUser({email, password}); // calling API services from the service folder 
      console.log('Login successful:', user);
      localStorage.setItem('email', email); // seting loging information in local storage for to know has logged in .
      
     navigate('/')
    
    } catch (error) {
      console.error( "this is error msg ", error.message); 
      setWrong(error.message); // Seting error here
    }
  };
  



  return (
    <div className='w-full h-screen  flex '>

      {/* image container */}

      <div className='w-1/2 h-screen bg-red-600 relative hidden lg:flex'>
        
        <div className='w-full h-full bg-gray-800 absolute  '>
         {/* importing image directly from the folder this need to be correct */}
          <img src="public/assets/images/LoginImage.webp" alt="loginImage"
          className="w-full h-full object-cover" />

        </div>

      </div>
 



      {/* login container */}
      <div className=' h-screen flex justify-center items-center lg:w-1/2  '>

      <div className='w-[90%]   flex-col items-center justify-center'>

        <div className=' text-center space-y-6 mb-10 relative'>
        
          <h1  className='text-center font-palanquin font-bold text-black text-2xl'>LOGIN</h1>
          <p className='text-center font-montserrat text-black'>If you have an account with us, please log in.</p>
        </div>

        <div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
         {({ errors, touched }) => (
        <Form>

         
        {/* for printing error message */}
          {invalidmsg ? 
          <div className='w-full  mb-3  '>
          <p className='text-red-500  ' > {invalidmsg}</p>
         </div>
         : <div className='w-full mb-3'></div>
          }
          

          
          <Field 
           type="email"
           name="email"
           placeholder="Email address"
           className={`border border-greenDark   placeholder:text-slate-400 w-full mb-4 p-2 ${errors.email && touched.email ? 'border-red-500' : ''}`}
           />

           <Field
           type="password"
           name="password"
           placeholder="password"
           className={`border border-greenDark    placeholder:text-slate-400 w-full mb-4 p-2 ${errors.email && touched.email ? 'border-red-500' : ''}`}
           />
          <button type="submit"
          className={"w-full mb-4  p-2 bg-greenDark border border-greenDark rounded-md font-bold text-white"}
          >LOGIN</button>
        </Form>
         )} 
      </Formik>

        </div>

        <hr className='border border-greenDark mt-4 mb-10' />

        <div className='w-full  flex flex-col justify-center items-center'>

          <h1 
          className='text-center font-palanquin font-bold text-black text-2xl mt-4 mb-4'>Still don't have an account?</h1>
          <p className='text-center font-montserrat text-black mb-4'>Create a Kaalcharakk customer account to make it easier to see an overview of your orders, track your orders and make checking out even faster.</p>
          <button type="submit"
          className={"w-full mb-4  p-2  border border-greenDark bg-greenDark hover:bg-greenLight font-bold text-white rounded-md"}
             onClick={()=>navigate('/signup')}
          
          >REGISTER</button>


        </div>


      </div>

      </div>







      
      
    </div>
  );
};

export default Login;
