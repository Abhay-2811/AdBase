import React from 'react'
import { BlackCreateWalletButton } from '../BlackCreateWalletButton'
import { CoinbaseWalletLogo } from '../CoinbaseWalletLogo'

function Navbar() {
  return (
    <navbar className='sticky top-0 z-50'>
    <div className='flex flex-row mx-auto px-[40px] py-[20px] justify-between items-center mt-[0px] bg-black '>
    <div className='flex-1 flex-start font-bold text-2xl text-purple-400'>
      <a href='/'>BaseAds</a>
    </div>
    <div className='flex items-center space-x-8'>
    <h1 className='font-medium text-xxl text-white'>
        <a href='/dashboard'>Dashoard</a>
      </h1>
      <h1 className='font-medium text-xxl text-white'>
        <a href='/landing'>Explore</a>
      </h1>
      <div className='text-white'>
        <BlackCreateWalletButton />
      </div>
    </div>
  </div>
  <hr className='border-t-4 border-purple-600' />
  
  </navbar>
  
  )
}

export default Navbar

// <h1 className='text-white'>coinbaseWallet</h1>
