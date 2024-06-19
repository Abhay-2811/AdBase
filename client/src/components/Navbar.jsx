import React from 'react'
import { BlackCreateWalletButton } from '../BlackCreateWalletButton'
import { CoinbaseWalletLogo } from '../CoinbaseWalletLogo'

function Navbar() {



  return (
    <navbar >
    <div className='flex flex-row mx-auto px-[30px] py-[20px] justify-between bg-slate-900 mt-[0px]'>
      <h1 className='font-bold text-4xl text-blue-400'>BaseADS</h1>

      <div>
        <ul className='flex flex-row gap-x-10 font-semibold text-xl text-white'>
          <li >
            <a href='/'>Home</a>
          </li>
          <li>
            <a href=''>Explore</a>
          </li>
          <li>
            <a href='/advertise'>PostADS</a>
          </li>
        </ul>
      </div>
       <BlackCreateWalletButton/>
    </div>
  </navbar>
  )
}

export default Navbar

// <h1 className='text-white'>coinbaseWallet</h1>
