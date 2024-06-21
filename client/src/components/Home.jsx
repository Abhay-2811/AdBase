import React from 'react'


import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const TypewriterEffectSmoothDemo=()=>{
  const words = [
    {
      text: "Run",
    },
    {
      text: "Ad's",
    },

    {
      text: "with",
    },
    {
      text: "BaseADs.",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem]  mt-[40px] ">
      <TypewriterEffectSmooth words={words}  />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
    
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className='flex flex-col  items-center bg-black  '>
    
    <div className='text-4xl'>
    <TypewriterEffectSmoothDemo/>
    </div>
   

    <h3 className='mt-[20px] text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
    <br/> that ushers in a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
    <br/> Ethereum Transactions</h3>
    <button className='mt-[20px] border-2 border-purple-500 text-white px-[10px] 
    py-[10px] font-medium text-xl bg-gradient-to-r from-purple-900 via-black to-black  rounded-lg mx-auto
    '>Join the community</button>
 
    <div className='mt-[80px] flex flex-col gap-y-[80px] text-white mb-[30px]'>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div>
    <h1 className='text-center font-medium text-3xl text-purple-500'>Decentralization Meets Scale</h1>
    <p className='mt-[20px] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
    <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    <br/> s nisi ut aliquip ex ea commodo consequat..</p>
    </div>
    <div>
    <img  className='h-[400px] ' src='https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/6480e2eb60a636267f069f16_autonomy-collage-2.png' alt='image'/>
    </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div className='order-2 md:order-1'>
    <img  className='h-[400px] ' src='https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/647f71a77a2f4691b4fa2430_speed-comp-collage-2.png' alt='image'/>
    </div>
    <div className='order-1 md:order-2'>
    <h1 className='text-center text-3xl font-semibold text-purple-500'>Superscalar Architecture</h1>
    <p className='mt-[20px] text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
    <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
    <br/>superscalar, pipelined execution and optimized architecture.</p>
    </div>
    </div>

    </div>

    </div>
  )
}

export default Home
