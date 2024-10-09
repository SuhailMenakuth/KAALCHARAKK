import React from 'react';

const ToggleButtons = ({ activeDiv, setActiveDiv }) => {
  const toggleDiv = (prefix) => {
    setActiveDiv(activeDiv === prefix ? null : prefix);
  };

  return (
    <div className="flex w-full justify-between">
      <div 
        onClick={() => toggleDiv('MR')}
        className={`border border-gold w-[48%] h-12 flex items-center justify-center cursor-pointer ${activeDiv === 'MR' ? 'bg-gold' : 'bg-none'}`}
      >
        <span className={`font-bold ${activeDiv === 'MR' ? 'text-white' : 'text-gold'}`}>MR.</span> 
      </div> 
      <div
        onClick={() => toggleDiv('MS')}
        className={`border border-gold w-[48%] h-12 flex items-center justify-center cursor-pointer ${activeDiv === 'MS' ? 'bg-gold' : 'bg-none'}`}
      >
        <span className={`font-bold ${activeDiv === 'MS' ? 'text-white' : 'text-gold'}`}>MS.</span> 
      </div>
    </div>
  );
};

export default ToggleButtons;
