import React from 'react'

import Ayako from '../assets/ayako.jpg'
const projects = [
    {
      id: 1,
      name: "Employee MS",
      technologies: "MERN Stack",

      github: "https://github.com/YouafKhan1",
    },
    {
      id: 2,
      name: "Blog App",
      technologies: "MERN Stack",

      github: "https://github.com/YouafKhan1",
    },
    {
      id: 3,
      name: "Book MS",
      technologies: "MERN Stack",

      github: "https://github.com/YouafKhan1",
    },
  ];
  const Project = () => {
  return (
    <div className='bg-black w-full h-full min-h-screen '>
    <div className='bg-black flex flex-col mx-auto container items-center md:items-start justify-center'>

    <div className="bg-gray text-white py-20" id="project">
    <div>
    <h2 className="text-4xl font-bold mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
          transform transition-transform duration-300 hover:scale-105">
            <img src={Ayako} alt={project.name} className="rounded-lg mb-4
            w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.technologies}</p>
            <a href={Ayako} className="inline-block bg-gradient-to-r
            from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
            rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Project