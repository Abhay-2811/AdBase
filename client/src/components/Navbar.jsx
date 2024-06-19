import React from 'react'
import { BlackCreateWalletButton } from '../BlackCreateWalletButton'
import { CoinbaseWalletLogo } from '../CoinbaseWalletLogo'

function Navbar() {



  return (
    <navbar>
    <div className='flex flex-row mx-auto px-[30px] py-[20px] justify-between items-center mt-[0px]'>
      <div className='flex-1'></div>
      <h1 className='font-bold text-2xl text-purple-500'>
        <a href='/'>BaseADS</a>
      </h1>
      <div className='flex-1 flex justify-end'>
        <BlackCreateWalletButton />
      </div>
    </div>
    <hr className='border-t-2 border-blue-400 mt-4' />
  </navbar>
  
  )
}

export default Navbar

// <h1 className='text-white'>coinbaseWallet</h1>
