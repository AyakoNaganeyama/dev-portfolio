import React from 'react';

import Kimono from '../assets/komono.jpg';
import Japan from '../assets/japansite.jpg';
import Weather from '../assets/dataManagement.jpg';
import TODO from '../assets/demo-datapresistance.jpg';
import Vol from '../assets/volunteerapp.jpg'
import Game from '../assets/game.jpg'

const projects = [
  {
    id: 1,
    name: "Kimono E-commerce Website",
    technologies: "ASP.NET Core MVC, Microsoft Azure, C#, MS SQL",
    image: Kimono,
    github: "https://github.com/AyakoNaganeyama/kimono-ecommerce-newzealand",
    link: "https://ma-kimono20250110153501.azurewebsites.net/",
  },
  {
    id: 2,
    name: "Side Scroller Game",
    technologies: "React, TypeScript",
    image: Game,
    github: "https://github.com/AyakoNaganeyama/side-scroller-game",
    link: "https://side-scroller-game-git-main-ayakonaganeyamas-projects.vercel.app/",
  },

  {
    id: 3,
    name: "To-do Mobile App",
    technologies: "React Native Expo, TypeScript, AsyncStorage, Zustand",
    image: TODO,
    github: "https://github.com/AyakoNaganeyama/to-do-list-mobile-app",
    link: "https://expo.dev/preview/update?message=SDK+update&updateRuntimeVersion=1.0.0&createdAt=2025-10-01T02%3A11%3A05.930Z&slug=exp&projectId=ba97eb8d-f733-4ac9-b817-975a16122842&group=0f58ab30-7b57-438e-84df-307a22e605b7",
  },
  {
    id: 4,
    name: "Volunteer Seeking Mobile App",
    technologies: "React Native Expo, TypeScript, Firebase, Zustand, AsyncStorage",
    image: Vol,
    github: "https://github.com/AyakoNaganeyama/volunteer-mobile-app-filebased-route",
    link: "https://expo.dev/preview/update?message=SDK+updated&updateRuntimeVersion=1.0.0&createdAt=2025-09-28T23%3A58%3A48.422Z&slug=exp&projectId=18eb286a-729b-4319-ab6f-e037c849b6a1&group=1a5f38ae-f4e5-4d87-a45b-074c13452d75",
  },
  {

    id: 5,
    name: "Tourism Website",
    technologies: "HTML, CSS, JavaScript",
    image: Japan,
    github: "https://github.com/AyakoNaganeyama/static-japanwebsite",
    link: "https://ayakonaganeyama.github.io/static-japanwebsite/",
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


              return (
                <div
                  key={project.id}
                  className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 flex flex-col h-full"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rounded-lg mb-4 w-full h-48 object-contain bg-black"
                    />
                  </a>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.technologies}</p>

                 <div className="flex justify-between mt-auto gap-2">
  {/* Project Button */}

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:scale-105 transform transition-transform duration-300"
    >
      Preview
    </a>


  {/* Code & Doc Button */}

    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 text-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white hover:scale-105 transform transition-transform duration-300"
    >
      Code & Doc
    </a>

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
