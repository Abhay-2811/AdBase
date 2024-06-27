import React, { useState } from 'react';
import { CardBody, CardContainer, CardItem } from "../../src/components/ui/3d-card";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';




const TypewriterEffectSmoothDemo = () => {
  const words = [
    { text: "Claim" },
    { text: "Ad's" },
    { text: "Revenue.", className: "text-purple-500 dark:text-purple-500" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem] mt-[40px]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

function Dashboard() {




  return (
    <div className='bg-black flex flex-col items-center h-screen scroller'>
      <div className='text-4xl'>
        <TypewriterEffectSmoothDemo />
      </div>
    
      <div className='mt-8 flex flex-row items-center gap-x-12'>
     
      <div className='border border-purple-500 h-[200px] w-[330px] rounded-lg flex flex-row hover:shadow-purple-500 hover:shadow-lg
      items-center justify-center hover:border-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out'>
     <div className='text-white'>
     <img src='https://plus.unsplash.com/premium_photo-1674674741071-1e28e023ccc1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlbW9uZXl8ZW58MHx8MHx8fDA%3D' className='h-[60px] w-[60px]'/>
     </div>
     <div className='text-white px-[30px] py-[5px]'>
     <h1 className='font-bold text-4xl'>220</h1>
     <p className='font-medium text-2xl'>Adclicks</p>
     </div>
      </div>

      <div className='relative border border-purple-500 h-[200px] w-[330px] rounded-lg flex flex-row hover:shadow-purple-500 hover:shadow-lg items-center justify-center hover:border-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out'>
      <div className='text-white'>
        <img src='https://plus.unsplash.com/premium_photo-1674674741071-1e28e023ccc1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlbW5leXxlbnwwfHx8fHx8&auto=format&fit=crop&w=800&q=60' className='h-[60px] w-[60px]'/>
      </div>
      <div className='text-white px-[30px] py-[5px]'>
        <h1 className='font-bold text-4xl'>980$</h1>
        <p className='font-medium text-2xl'>Claimable</p>
      </div>
      <button className='absolute bottom-2 right-2 px-3 py-1 rounded-lg bg-gradient-to-r from-purple-900 via-black to-black text-white'>
        Claim
      </button>
    </div>
    
      
      <div className='border border-purple-500 h-[200px] w-[330px] rounded-lg flex flex-row hover:shadow-purple-500 hover:shadow-lg
      items-center justify-center hover:border-purple-500 hover:scale-110 transition-transform duration-300 ease-in-out'>
     <div className='text-white'>
     <img src='https://plus.unsplash.com/premium_photo-1674674741071-1e28e023ccc1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVycGxlbW9uZXl8ZW58MHx8MHx8fDA%3D' className='h-[60px] w-[60px]'/>
     </div>
     <div className='text-white px-[30px] py-[5px]'>
     <h1 className='font-bold text-4xl'>1280$</h1>
     <p className='font-medium text-2xl'>Total Revenue</p>
     </div>
      </div>

     </div>
     
    </div>
  );
}

export default Dashboard;
