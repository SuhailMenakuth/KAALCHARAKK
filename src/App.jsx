import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Signup, Login} from './Pages/index'
import { Hero } from './Components/index';






const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/hero' element={<Hero/>} />
      </Routes>
    </Router>
  );
};



export default App;
