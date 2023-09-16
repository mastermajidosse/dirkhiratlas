import React from 'react'
import Navbar from './navbar'
import Payment from './payment/payment'
import FirstStep from './payment/step1'

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-black bg-opacity-75'>

            <Navbar />

            <div className='w-96 m-8 p-6 shadow-lg bg-white rounded-md'>
                <h1 className='text-3xl block text-center font-semibold uppercase '>

                    Join #TeamAtlas

                </h1>
                <Payment />
            </div>
        </div>
    )
}

export default Home