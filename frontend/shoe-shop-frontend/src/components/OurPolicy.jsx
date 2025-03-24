import React from 'react'
import exchange from '../assets/exchange.png'
import sevenDay from '../assets/sevenDay.png'
import customerHelp from '../assets/customerHelp.jpeg'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={exchange} className='w-16 m-auto mb-5' alt='exchangeIcon'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={sevenDay} className='w-16 m-auto mb-5' alt='exchangeIcon'/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>
      <div>
        <img src={customerHelp} className='w-16 m-auto mb-5' alt='exchangeIcon'/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
