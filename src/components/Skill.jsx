import React from 'react'

const Skill = () => {
  return (
    <div className='flex flex-col mx-auto container items-center md:items-start w-full h-full min-h-screen justify-center bg-gray-800'>

        <div>
    <h2 className="text-4xl font-bold mb-12 ">Skills</h2>

    <h3 className="text-4xl font-bold mb-12 underline decoration-slate-300">Frontend</h3>
    <div className='mt-8 flex-wrap grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
        <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>HTML</button>
        <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>CSS</button>
             <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>JavaScript</button>
        <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>React.js</button>
             <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>TypeScript</button>
        <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>React Native Expo</button>
    </div>



<h3 className="text-4xl font-bold mt-20 mb-12 underline decoration-slate-300">Backend</h3>
    <div className='mt-8 flex-wrap grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
        <button
        className='w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>Node.js</button>
        <button
        className='w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>C#</button>
             <button
        className='w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>Asp.Net Core MVC</button>
        <button
        className='w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>Java</button>
             <button
        className='w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>NoSQL(Firebase)</button>
        <button
        className='w-auto bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-3 rounded-full'>SQL</button>
    </div>

</div>

    </div>
  )
}

export default Skill