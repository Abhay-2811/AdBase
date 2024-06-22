import React from 'react'

import { CardBody, CardContainer, CardItem } from "../../src/components/ui/3d-card";


 const ThreeDCardDemo=()=> {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        Campaign
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          The spending limit is $50 USDC
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
          Live
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
           Asia
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}


function Landing() {
  return (
    <div className='bg-black text-white h-screen '>
      
    <div className='flex  items-center justify-end px-[100px] py-[30px]'>
 

     <button className='border border-2 border-purple-500 px-[20px] py-[7px] text-xl font-semibold
     rounded-lg bg-gradient-to-r from-purple-900 via-black to-black text-white'>
     <a href='/create'> + Add Campaign</a></button>
    
    </div>

      <div className='flex flex-row mt-[50px] ml-[30px] mx-auto gap-x-12'>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/>
      </div>


    </div>
  )
}

export default Landing


