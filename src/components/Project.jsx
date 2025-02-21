import React from 'react'

import Ayako from '../assets/ayako.jpg'
import Kimono from '../assets/komono.jpg'
import Japan from '../assets/japansite.jpg'
import Weather from '../assets/dataManagement.jpg'
import TODO from '../assets/demo-datapresistance.jpg'
const projects = [
    {
      id: 1,
      name: "Kimono E-commerce Website",
      technologies: "ASP.NET Core MVC, C#",
      image:Kimono,

      github: "https://github.com/AyakoNaganeyama/kimono-ecommerce-newzealand",
      Link: "https://ma-kimono20250110153501.azurewebsites.net/",
    },
    {
      id: 2,
      name: "Tourism Website",
      technologies: "HTML, CSS, JavaScript",
      image:Japan,

      github: "https://github.com/AyakoNaganeyama/static-japanwebsite",
      Link: "https://ayakonaganeyama.github.io/static-japanwebsite/",
    },
    {
      id: 3,
      name: "Weather Mobile App",
      technologies: "React Native Expo, TypeScript",

      image:Weather,

      github: "https://github.com/AyakoNaganeyama/weather-mobile-app",
      Link: "https://expo.dev/preview/update?message=configure%20eas&updateRuntimeVersion=1.2.2&createdAt=2025-01-03T22%3A46%3A43.758Z&slug=exp&projectId=66cbf7f4-3f1d-4cb7-b21a-738c6f2c41a8&group=9e8508fb-815b-440a-9757-6fa36dbfe40c",
    },
    {
      id: 4,
      name: "To-do Mobile App",
      technologies: "React Native Expo, TypeScript",

      image:TODO,

      github: "https://github.com/AyakoNaganeyama/to-do-list-mobile-app",
      Link:"https://expo.dev/preview/update?message=set%20addVersionSource&updateRuntimeVersion=1.1.0&createdAt=2024-12-31T01%3A02%3A09.239Z&slug=exp&projectId=ba97eb8d-f733-4ac9-b817-975a16122842&group=9b10e8b7-47f0-4483-a75c-bbc20d22645e"
    },
  ];
  const Project = () => {
  return (
    <div className='bg-black w-full h-full min-h-screen flex justify-center pt-30 ' id="projects">
    <div className='bg-black flex flex-col mx-auto container items-center md:items-start justify-center'>

    <div className="bg-gray text-white py-20" id="project">
    <div>
    <h2 className="text-4xl font-bold mb-12 ">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
          transform transition-transform duration-300 hover:scale-105 flex flex-col h-full">
            <a href={project.Link}>
            <img src={project.image} alt={project.name} className="rounded-lg mb-4
            w-full h-48 object-cover" />

            </a>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.technologies}</p>

            <div className="flex justify-between md:space-x-4  mt-auto">
            <a href={project.Link} className="inline-block bg-gradient-to-r
            from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full" target="_blank"
            rel="noopener noreferrer">Project Link</a>

<a href={project.github} className="inline-block bg-gradient-to-r
            from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full" target="_blank"
            rel="noopener noreferrer">Code and Document</a>

</div>
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