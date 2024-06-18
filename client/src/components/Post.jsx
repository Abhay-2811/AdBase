import React from 'react'

function Post() {
  return (
    <div>
     
    <div className='flex flex-col items-center bg-white pb-[50px]'>
  

    <div className='flex gap-x-12 mt-[60px]'>
      <div className="flex items-center ps-4 border border-transparent rounded  bg-purple-400 ">
        <input
          id="bordered-radio-1"
          type="radio"
          value="rent"
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          
        />
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ms-2 text-lg font-medium text-black font-bold"
        >
          Live ADS
        </label>
      </div>
      <div className="flex items-center ps-4 border border-transparent rounded  bg-purple-400 ">
        <input
          id="bordered-radio-2"
          type="radio"
          value="need"
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
       
        />
        <label
          htmlFor="bordered-radio-2"
          className="w-full py-4 ms-2 text-lg font-medium text-black font-bold"
        >
          Post ADS
        </label>
      </div>
    </div>

    <div className=''>
    
    </div>
  </div>
    </div>
  )
}

export default Post
