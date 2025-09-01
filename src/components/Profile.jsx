import React from 'react';
import Navbar from './Navbar';

const Profile = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('projects');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center py-40
                      bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text text-white mb-4 leading-tight">
          Ayako Naganeyama
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10">
          Full-Stack Developer
        </p>

        <button
          onClick={scrollToSkills}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transform transition-transform duration-300"
        >
          See My Skills
        </button>
      </div>
    </>
  );
};

export default Profile;
