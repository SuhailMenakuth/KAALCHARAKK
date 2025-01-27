import React from 'react';

const Loader2 = () => {
  return (
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    //   <div className="w-12 h-12 border-4 border-t-4 border-t-green-500 border-gray-300 rounded-full animate-spin"></div>
    // </div>

    // <div className="fixed inset-0 bg-none flex items-center justify-center z-50">
    //   <div className="flex space-x-2">
    //     <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce"></div>
    //     <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce delay-200"></div>
    //     <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce delay-400"></div>
    //   </div>
    // </div>


    // <div className="fixed inset-0 bg-none flex items-center justify-center z-50">
    //   <div className="flex space-x-4">
    //     <div className="w-4 h-4 bg-greenDark rounded-full animate-bounce"></div>
    //     <div className="w-4 h-4 bg-greenDark rounded-full animate-bounce [animation-delay:0.2s]"></div>
    //     <div className="w-4 h-4 bg-greenDark rounded-full animate-bounce [animation-delay:0.4s]"></div>
    //   </div>
    // </div>

    <div className="flex justify-center items-center">
    <div className="flex space-x-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`circle relative w-5 h-5 rounded-full border border-gray-400 bg-transparent animate-circle ${
            index > 0 ? `delay-${index * 3}` : ""
          }`}
        >
          <div className="dot absolute w-4 h-4 bg-gray-400 rounded-full animate-dot"></div>
          <div className="outline absolute w-5 h-5 rounded-full animate-outline"></div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Loader2;