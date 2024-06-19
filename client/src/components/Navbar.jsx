import React from 'react'
import { BlackCreateWalletButton } from '../BlackCreateWalletButton'
import { CoinbaseWalletLogo } from '../CoinbaseWalletLogo'

function Navbar() {



  return (
    <navbar >
    <div className='flex flex-row mx-auto px-[30px] py-[20px] justify-between  mt-[0px]'>
      <h1 className='font-bold text-xl text-blue-400'>
      <a href='/'>BaseADS</a>  </h1>

      <div>
        <ul className='flex flex-row gap-x-10 font-semibold text-xl text-blue-400'>
      
          <li>
            <a href='/advertise'>PostADS</a>
          </li>
        </ul>
      </div>
       <BlackCreateWalletButton/>
    </div>
    <hr className='border-t-2 border-blue-400 mt-4' />
    <hr className='border-t-4 border-blue-400 mt-4' />
  </navbar>
  )
}

export default Navbar

// <h1 className='text-white'>coinbaseWallet</h1>
