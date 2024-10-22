import React, { useState } from 'react';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null); // Track the active section

  // Toggle function for small screens only
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex flex-col bg-slate-200">

      {/* Banner Section */}
      <div className="bg-[#4b735b] flex justify-center items-center py-4">
        <h1 className="text-white">Tradition since 2000</h1>
      </div>

      {/* Social Media Section */}
      <div className="mx-auto flex flex-col justify-center items-center py-10">
        <h1 className="font-bold">Social Media</h1>
        <p>Follow Kaalcharakk</p>
        <p>Icons</p>
      </div>

      <hr className="border-slate-400" />

      {/* Link List Section with Responsive Behavior */}
      <div className="flex flex-col mt-8 mb-4 md:flex-row md:space-x-6">

        {/* Login/Register Section */}
        <div className="w-full md:w-1/3  border-b-2 border-slate-400 md:border-none pb-4 md:pb-0 flex flex-col items-center">
          <h1
            className="font-bold mb-2 cursor-pointer md:cursor-default "
            onClick={() => toggleSection('loginRegister')}
          >
            LOGIN/REGISTER
          </h1>
          <ul
            className={`transition-all duration-300  ${
              activeSection === 'loginRegister' || window.innerWidth >= 768
                ? 'block'
                : 'hidden'
            } md:block text-left`}
          >
            <li>Login/Register</li>
            <li>My Profile</li>
            <li>My Orders</li>
            <li>My Cart</li>
          </ul>
        </div>

        {/* Top Styles Section */}
        <div className="w-full md:w-1/3 border-b-2 border-slate-400 md:border-none pb-4 md:pb-0 flex flex-col items-center">
          <h1
            className="font-bold mb-2 cursor-pointer md:cursor-default "
            onClick={() => toggleSection('topStyles')}
          >
            TOP STYLES
          </h1>
          <ul
            className={`transition-all duration-300 ${
              activeSection === 'topStyles' || window.innerWidth >= 768
                ? 'block'
                : 'hidden'
            } md:block `}
          >
            <li>Sanam</li>
            <li>Arizona</li>
            <li>Gikali</li>
            <li>Brazil Men</li>
          </ul>
        </div>

        {/* Things to Know Section */}
        <div className="w-full md:w-1/3 border-b-2 border-slate-400 md:border-none pb-4 md:pb-0 flex flex-col items-center">
          <h1
            className="font-bold mb-2 cursor-pointer md:cursor-default"
            onClick={() => toggleSection('thingsToKnow')}
          >
            THINGS TO KNOW
          </h1>
          <ul
            className={`transition-all duration-300 ${
              activeSection === 'thingsToKnow' || window.innerWidth >= 768
                ? 'block'
                : 'hidden'
            } md:block `}
          >
            <li>Materials</li>
            <li>Footbed</li>
            <li>Sustainability</li>
            <li>Fit Guide</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
