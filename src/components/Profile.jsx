import React from 'react'
import Ayako from '../assets/ayako.jpg'
import Navbar from './Navbar'

const Profile = () => {
    return (
        <>
        <Navbar />
        <div className='w-full min-h-screen flex flex-col  py-40  bg-black'>

            <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center py-16">
                <img
                    src={Ayako}
                    alt="Ayako"
                    className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
                    transition-transform duration-300 hover:scale-105'
                />
                <h1 className='text-4xl font-bold'>
                    I'm{" "}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>
                        Ayako Naganeyama
                    </span>
                    , Full-Stack Developer
                </h1>
                <p className='mt-4 text-lg text-gray-300'>
                    I love tackling complex problems and turning ideas into functional, user-friendly applications.
                </p>
            </div>
        </div>
        </>
    )
}

export default Profile
