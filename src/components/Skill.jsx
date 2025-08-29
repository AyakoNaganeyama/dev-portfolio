import React from 'react';

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "TypeScript",
  "React Native Expo",
];

const backendSkills = [
  "Node.js",
  "C#",
  "ASP.NET Core MVC",
  "Java",
  "NoSQL (Firebase)",
  "SQL",
];

const Skill = () => {
  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <button
        key={index}
        className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 hover:shadow-lg
        px-4 py-3 rounded-full text-sm md:text-base"
      >
        {skill}
      </button>
    ));

  return (
    <div className=" w-full min-h-screen flex justify-center items-center py-32  bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">Skills</h2>

        <section className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 underline decoration-slate-300 text-white">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {renderSkills(frontendSkills)}
          </div>
        </section>

        <section>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 underline decoration-slate-300 text-white">
            Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {renderSkills(backendSkills)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skill;
