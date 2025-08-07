import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React","Angular",
   "Node.js", "Laravel", "MongoDB","PostgreSql",
  "Express.js", "Tailwind CSS", "Git",
];

const Skills = () => {
  return (
    <section className="bg-white py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">🚀 My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-50 to-blue-100 text-blue-800 font-semibold text-center py-6 px-4 rounded-lg shadow hover:shadow-xl hover:scale-105 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
