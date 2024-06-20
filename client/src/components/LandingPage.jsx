import React from 'react'

function LandingPage() {
  return (
    <div className='flex flex-col  items-center bg-gradient-to-r from-purple-900 via-black to-black  '>
    <h1 className='text-4xl font-semibold mt-[40px] text-blue-500'>Starter kit to build future on Base </h1>
    <h3 className='mt-[20px] text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
    <br/> that ushers in a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
    <br/> Ethereum Transactions</h3>
    <button className='mt-[20px] border-2 border-white text-white px-[10px] 
    py-[10px] font-medium text-xl bg-gradient-to-r from-purple-900 via-black to-black  rounded-lg mx-auto
    border-blue-500'>Join the community</button>
 
    <div className='mt-[80px] flex flex-col gap-y-[80px] text-white mb-[30px]'>

    <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
    <div>
    <h1 className='text-center font-medium text-3xl text-blue-500'>Decentralization Meets Scale</h1>
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
    <h1 className='text-center text-3xl font-semibold text-blue-500'>Superscalar Architecture</h1>
    <p className='mt-[20px] text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
    <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
    <br/>superscalar, pipelined execution and optimized architecture.</p>
    </div>
    </div>

    </div>

    </div>
  )
}

export default LandingPage
