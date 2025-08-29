import React from 'react';

import Kimono from '../assets/komono.jpg';
import Japan from '../assets/japansite.jpg';
import Weather from '../assets/dataManagement.jpg';
import TODO from '../assets/demo-datapresistance.jpg';
import Vol from '../assets/volunteerapp.jpg'

const projects = [
  {
    id: 1,
    name: "Kimono E-commerce Website",
    technologies: "ASP.NET Core MVC, C#",
    image: Kimono,
    github: "https://github.com/AyakoNaganeyama/kimono-ecommerce-newzealand",
    link: "https://ma-kimono20250110153501.azurewebsites.net/",
  },
  {
    id: 2,
    name: "Tourism Website",
    technologies: "HTML, CSS, JavaScript",
    image: Japan,
    github: "https://github.com/AyakoNaganeyama/static-japanwebsite",
    link: "https://ayakonaganeyama.github.io/static-japanwebsite/",
  },
  {
    id: 3,
    name: "Weather Mobile App",
    technologies: "React Native Expo, TypeScript",
    image: Weather,
    github: "https://github.com/AyakoNaganeyama/weather-mobile-app",
    link: "https://expo.dev/preview/update?message=configure%20eas&updateRuntimeVersion=1.2.2&createdAt=2025-01-03T22%3A46%3A43.758Z&slug=exp&projectId=66cbf7f4-3f1d-4cb7-b21a-738c6f2c41a8&group=9e8508fb-815b-440a-9757-6fa36dbfe40c",
  },
  {
    id: 4,
    name: "To-do Mobile App",
    technologies: "React Native Expo, TypeScript",
    image: TODO,
    github: "https://github.com/AyakoNaganeyama/to-do-list-mobile-app",
    link: "https://expo.dev/preview/update?message=set%20addVersionSource&updateRuntimeVersion=1.1.0&createdAt=2024-12-31T01%3A02%3A09.239Z&slug=exp&projectId=ba97eb8d-f733-4ac9-b817-975a16122842&group=9b10e8b7-47f0-4483-a75c-bbc20d22645e",
  },
  {
    id: 5,
    name: "Volunteer Seeking Mobile App",
    technologies: "React Native Expo, TypeScript, Firebase, Zustand, AsyncStorage",
    image: Vol,
    github: "#",
    link: "#",
  }
];

const Project = () => {
  return (
    <div className="bg-black w-full min-h-screen flex justify-center py-20">
      <div className="container mx-auto flex flex-col items-center md:items-start">
        <div className="text-white py-10" id="projects">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const isPrivate = project.id === 5; // check inside the map

              return (
                <div
                  key={project.id}
                  className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 flex flex-col h-full"
                >
                  <a href={isPrivate ? "#" : project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rounded-lg mb-4 w-full h-48 object-cover"
                    />
                  </a>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.technologies}</p>

                 <div className="flex justify-between mt-auto gap-2">
  {/* Project Button */}
  {isPrivate ? (
    <button className="flex-1 text-center px-4 py-2 rounded-full bg-gray-600 text-gray-300 cursor-not-allowed">
      Private
    </button>
  ) : (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:scale-105 transform transition-transform duration-300"
    >
      Project
    </a>
  )}

  {/* Code & Doc Button */}
  {isPrivate ? (
    <button className="flex-1 text-center px-4 py-2 rounded-full bg-gray-600 text-gray-300 cursor-not-allowed">
      Private
    </button>
  ) : (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:scale-105 transform transition-transform duration-300"
    >
      Code & Doc
    </a>
  )}
</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Project;
