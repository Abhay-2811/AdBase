import React from 'react'

function Home() {
  return (
    <div className='bg-gradient-to-r from-purple-900 via-black to-black text-white h-screen '>
      
    <div className='flex  items-center justify-end px-[100px] py-[30px]'>
 

     <button className='border border-2 border-blue-500 px-[20px] py-[7px] text-xl font-semibold
     rounded-lg bg-gradient-to-r from-purple-900 via-black to-black text-white'>
     <a href='/create'> + Add Campaign</a></button>
    
    </div>

      <div className='flex flex-row mt-[50px]'>
      
      <div
      class="bg-white shadow-[0_5px_14px_-4px_rgba(0,0,0,0.3)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div class="p-6">
        <h3 class="text-lg font-semibold">Heading</h3>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu, at fermentum dui. Maecenas</p>
        <button type="button"
          class="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">View</button>
      </div>
    </div>

    <div
      class="bg-white shadow-[0_5px_14px_-4px_rgba(0,0,0,0.3)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div class="p-6">
        <h3 class="text-lg font-semibold">Heading</h3>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu, at fermentum dui. Maecenas</p>
        <button type="button"
          class="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">View</button>
      </div>
    </div>

    <div
      class="bg-white shadow-[0_5px_14px_-4px_rgba(0,0,0,0.3)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div class="p-6">
        <h3 class="text-lg font-semibold">Heading</h3>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu, at fermentum dui. Maecenas</p>
        <button type="button"
          class="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700">View</button>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Home
