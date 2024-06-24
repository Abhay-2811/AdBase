import React, { useState } from 'react';
import { uploadToIPFS } from './ipfsUpload';

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    region: '',
    file: null,
  });
  const [ipfsLink, setIpfsLink] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for file input change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });

    // Upload file to IPFS
    try {
      setUploadStatus('Uploading to IPFS...');
      const ipfsLink = await uploadToIPFS(file);
      setIpfsLink(ipfsLink);
      setUploadStatus('File uploaded to IPFS successfully!');
    } catch (error) {
      setUploadStatus('IPFS upload failed');
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='mt-[-20px] scroller'>
      <div className='bg-black h-screen'>
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
              <option value='' disabled>Select Country</option>
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
              Spending Limit (in ETH)
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

          <div className='p-4 mb-4 text-sm rounded-lg bg-purple-600 w-auto text-white' role='alert'>
            <span className='font-medium text-red-600'>
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

          {uploadStatus && (
            <p className='text-white'>{uploadStatus}</p>
          )}

          {ipfsLink && (
            <div className='mt-4'>
              <a href={ipfsLink} target='_blank' rel='noopener noreferrer' className='text-blue-600'>
                View Uploaded File on IPFS
              </a>
              <p className='text-white mt-2 break-all'>{ipfsLink}</p>
            </div>
          )}

          <button
            className='text-white mt-6 bg-purple-600 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-sm  mx-auto px-10 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-600 dark:focus:ring-blue-800 '
            type='submit'
          >
            Start Campaign by clicking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
