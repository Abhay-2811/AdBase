import React, { useState } from 'react';

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    region:'',
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
    <div className='bg-gradient-to-r from-purple-900 via-black to-black h-screen'>
      <form className='flex flex-col ml-40 mr-40 my-5 dark mb-10 py-[50px]' onSubmit={handleSubmit}>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            id='eventName'
            className='block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='eventName'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Campaign Name
          </label>
        </div>


        <div className='relative z-0 w-full mb-6 group'>
        <select
          name='region'
          value={formData.region}
          onChange={handleChange}
          className='block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          required
        >
        
          <option value='Asia' className='text-black'>Asia</option>
          <option value='Europe' className='text-black'>Europe</option>
          <option value='Pacific' className='text-black'>Pacific</option>
        </select>
        <label
          htmlFor='region'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Select Country
        </label>
      </div>        

        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='text'
            name='price'
            id='price'
            value={formData.price}
            onChange={handleChange}
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='price'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Spending Limit (in USDC)
          </label>
          <li
            isBlock
            showAnchorIcon
            href='https://whimsical-pie-92b2cd.netlify.app/'
            target='_blank'
            color='primary'
            className='text-blue-200'
          >
            Amount you want to spend in campaign
          </li>
        </div>

        <div className='p-4 mb-4 text-sm rounded-lg bg-blue-300 w-auto text-black' role='alert'>
          <span className='font-medium text-red-400'>
            <b>Warning!</b>
          </span>{' '}
          The above spending limit is for one time/single campaign 🤯 😎
        </div>

        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='file_input'>
            Upload file
          </label>
          <input
            type='file'
            name='file'
            required
            onChange={handleFileChange}
            className='mt-[20px] border border-2 border-transparent px-[10px]'
          />
          <br />
          {formData.file && (
            <img
              src={URL.createObjectURL(formData.file)}
              alt='Uploaded File'
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
        </div>

        <button
          className='text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[30%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='submit'
        >
          Start Campaign by clicking
        </button>
      </form>
    </div>
  );
}

export default Create;



// <div className='grid md:grid-cols-2 md:gap-6'>
// <div className='relative z-0 w-full mb-6 group'>
//   <input
//     type='text'
//     name='NFTname'
//     id='NFTname'
//     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
//     placeholder=' '
//     required
 
//   />
//   <label
//     htmlFor='NFTname'
//     className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
//   >
//     NFT Name
//   </label>
// </div>
// <div className='relative z-0 w-full mb-6 group'>
//   <input
//     type='text'
//     name='NFTsymbol'
//     id='NFTsymbol'
//     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
//     placeholder=' '
//     required
  
//   />
//   <label
//     htmlFor='NFTsymbol'
//     className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
//   >
//     NFT Symbol
//   </label>
// </div>
// </div>
