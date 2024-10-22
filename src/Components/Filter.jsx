import React,{useState} from 'react';

const Filter = () => {
    const [priceRange, setPriceRange] = useState(1000);

    const handlePriceChange = (event) => {
        setPriceRange(event.target.value); // Update state with the new value
      };

  return (
    <div className="filter w-full bg-gray-100 mx-auto p-4 grid gap-4">
      {/* Category Section */}
      <div className="category bg-white p-4 rounded-md shadow-md">
        <h1 className="font-bold text-lg mb-2">CATEGORY</h1>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" name="category" value="sandals" className="mr-2" />
            Sandals
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="category" value="shoes" className="mr-2" />
            Shoes
          </label>
        </div>
      </div>

      {/* Gender Section */}
      <div className="gender bg-white p-4 rounded-md shadow-md">
        <h1 className="font-bold text-lg mb-2">GENDER</h1>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" name="gender" value="men" className="mr-2" />
            Men
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="gender" value="women" className="mr-2" />
            Women
          </label>
        </div>
      </div>

      {/* Price Range Section */}
      <div className="price bg-white p-4 rounded-md shadow-md">
        <h1 className="font-bold text-lg mb-2">PRICE</h1>
        <div className="space-y-2">
          <label className="block mb-1">Select Price Range</label>
          <input type="range" min="12999" max="23999" step="1" className="w-full" value={priceRange} // Set the value from the state
            onChange={handlePriceChange}/>
          <p className="mt-2">Selected Price: ₹{priceRange}</p>
        </div>
      </div>

      {/* Size Section */}
      <div className="size bg-white p-4 rounded-md shadow-md">
        <h1 className="font-bold text-lg mb-2">SIZE - [EU]</h1>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 8 }, (_, i) => 5 + i).map((size) => (
            <button
              key={size}
              className="border border-gray-300 rounded-md py-2 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
