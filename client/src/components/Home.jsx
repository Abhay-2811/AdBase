import React from 'react'
import { motion } from "framer-motion"


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
    <div className='flex flex-col  items-center bg-black  scroller'>
    
    <div className='text-4xl'>
    <TypewriterEffectSmoothDemo/>
    </div>
   

    <h3 className='mt-[20px] text-white text-xl'>Create and manage ad campaigns effortlessly. Our user-friendly platform allows you 
    <br/> to design, launch, and monitor your ads seamlessly, ensuring maximum reach and
    <br/> engagement with minimal hassle.</h3>
    <button className='mt-[20px] border-2 border-purple-500 text-white px-[10px] 
    py-[10px] font-medium text-xl bg-gradient-to-r from-purple-900 via-black to-black  rounded-lg mx-auto
    '>Join the community</button>
 
    <div className='mt-[80px] flex flex-col gap-y-[80px] text-white mb-[30px]'>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div>
    <motion.h1 className='text-center font-medium text-3xl text-purple-500'
     initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}>
          Earn from Viewer Engagement</motion.h1>

    <motion.p   className='mt-[20px] text-lg'
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 4 }}>
    Generate revenue when viewers interact with your ads. Our system rewards you 
    <br/> for each visit and click, turning viewer engagement into tangible
    <br/> earnings for your campaigns.</motion.p>
    </div>
    <motion.div
        className='h-[400px]'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}>
    <img  className='h-[400px] ' src='https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/6480e2eb60a636267f069f16_autonomy-collage-2.png' alt='image'/>
    </motion.div>
    </div>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div className='order-2 md:order-1'>
    <img  className='h-[400px] ' src='https://assets-global.website-files.com/647f71a77a2f4691b4fa23a7/647f71a77a2f4691b4fa2430_speed-comp-collage-2.png' alt='image'/>
    </div>
    <div className='order-1 md:order-2'>
    <h1 className='text-center text-3xl font-semibold text-purple-500'>Comprehensive Analytics</h1>
    <p className='mt-[20px] text-lg '>Track the performance of your ads in real-time with our detailed analytics. Gain
    <br/>  insights into viewer behavior, optimize your campaigns, and make data-driven decisions to 
    <br/>enhance your advertising strategy.</p>
    </div>
    </div>

    </div>

    </div>
  )
}

export default Home
