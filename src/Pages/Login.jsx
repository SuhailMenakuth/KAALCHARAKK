import React ,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { loginImage } from '../assets/images/index';
import { loginUser } from '../Services/Api';
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const [invalidmsg,setWrong]=useState(''); // to track the email or password wrong
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
      const user = await loginUser({email, password});
      console.log('Login successful:', user);

     navigate('/home')
    
    } catch (error) {
      console.error( "thebncmd", error.message); 
      setWrong(error.message); // Seting error here
    }
  };
  



  return (
    <div className='w-full h-screen bg-red-300 flex '>

      {/* image container */}

      <div className='w-1/2 h-screen bg-red-600 relative hidden lg:flex'>
        
        <div className='w-full h-full bg-gray-800 absolute  '>

          <img src={loginImage} alt="loginImage"
          className="w-full h-full object-cover" />

        </div>

      </div>
 



      {/* login container */}
      <div className=' h-screen bg-greenDark flex justify-center items-center lg:w-1/2  '>

      <div className='w-[90%]   flex-col items-center justify-center'>

        <div className=' text-center space-y-6 mb-10 relative'>
        
          <h1  className='text-center font-palanquin font-bold text-gold text-2xl'>LOGIN</h1>
          <p className='text-center font-montserrat text-gold'>If you have an account with us, please log in.</p>
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
           className={`border border-greenLight bg-greenLight placeholder:text-white w-full mb-4 p-2 ${errors.email && touched.email ? 'border-red-500' : ''}`}
           />

           <Field
           type="password"
           name="password"
           placeholder="password"
           className={`border border-greenLight bg-greenLight placeholder:text-white w-full mb-4 p-2 ${errors.email && touched.email ? 'border-red-500' : ''}`}
           />
          <button type="submit"
          className={"w-full mb-4  p-2 bg-gold border border-greenLight rounded-md"}
          >LOGIN</button>
        </Form>
         )} 
      </Formik>

        </div>

        <hr className='border border-greenLight mt-4 mb-10' />

        <div className='w-full  flex flex-col justify-center items-center'>

          <h1 
          className='text-center font-palanquin font-bold text-gold text-2xl mt-4 mb-4'>Still don't have an account?</h1>
          <p className='text-center font-montserrat text-gold mb-4'>Create a Birkenstock customer account to make it easier to see an overview of your orders, track your orders and make checking out even faster.</p>
          <button type="submit"
          className={"w-full mb-4  p-2  border border-gold hover:bg-gold rounded-md"}
             onClick={()=>navigate('/signup')}
          
          >REGISTER</button>


        </div>


      </div>

      </div>







      
      
    </div>
  );
};

export default Login;
