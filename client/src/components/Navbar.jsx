import React from 'react'
import { BlackCreateWalletButton } from '../BlackCreateWalletButton'
import { CoinbaseWalletLogo } from '../CoinbaseWalletLogo'

function Navbar() {
  return (
    <navbar >
    <div className='flex flex-row mx-auto px-[40px] py-[20px] justify-between items-center mt-[0px]
bg-black '>
      <div className='flex-1 font-bold text-2xl text-purple-400'>
      <a href='/'>BaseAds</a>
      </div>
      <h1 className='font-bold text-2xl text-purple-400'>
        <a href='/landing'>Explore</a>
      </h1>
      <div className='flex-1 flex justify-end text-white'>
        <BlackCreateWalletButton />
      </div>
    </div>
    <hr className='border-t-4 border-purple-600 ' />
  </navbar>
  
  )
}

export default Navbar

// <h1 className='text-white'>coinbaseWallet</h1>