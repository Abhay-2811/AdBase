import React, { useState } from 'react';

function Post() {
  const [formData, setFormData] = useState({
    name: '',
    region: '', // Updated to use select dropdown
    price: '',
    file: null,
  });

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='bg-white flex flex-col justify-center  bg-gradient-to-r from-purple-900 via-black to-black h-screen'>
      <div className=''>
        <h1 className='text-white flex justify-center text-2xl font-bold mt-[20px]'>
          Fill box to post AD's
        </h1>
      </div>

      <div className='flex flex-col border border-4 border-transparent rounded-xl items-center mt-[40px] bg-blue-100 mx-[50px] mx-auto shadow-lg shadow-pink-500'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className='mt-[20px] border border-2 border-transparent px-[10px] text-black bg-blue-300 font-semibold'
          />
          <br />
          
          {/* Dropdown select for region */}
          <select
            name="region"
            value={formData.region}
            placeholder="Select region"
            onChange={handleChange}
            className='mt-[20px] border border-2 border-transparent px-[10px] text-black bg-blue-300 font-semibold'
            style={{ width: '69%' }} 
            >
            
            <option value="India">India</option>
            <option value="US">US</option>
            <option value="Canada">Canada</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
          </select>
          <br />

          <input
            type="number"
            name="price"
            placeholder="Price in USDT"
            value={formData.price}
            onChange={(e)=>{
              const value=parseInt(e.target.value);
              if (!isNaN(value) && value>=0){
                handleChange(e);
              }
            }}
            className='mt-[20px] border border-2 border-transparent px-[10px] text-black bg-blue-300 font-semibold'
          />
          <br />
          
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className='mt-[20px] border border-2 border-transparent px-[10px]'
          />
          <br />
          {formData.file && (
            <img
              src={URL.createObjectURL(formData.file)}
              alt="Uploaded File"
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
          <br />
          <button
            type="submit"
            className='mt-[20px] border border-4 px-[10px] py-[5px] rounded-xl font-semibold mb-[20px] text-white bg-blue-600 border-transparent'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
