import React from "react";

export default function About() {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">About Me</h2>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          👋 I'm <span className="font-semibold text-black">Karuppusamy</span>, a passionate
          <span className="text-blue-500 font-semibold"> Full Stack Developer</span> with <span className="font-semibold">3 years of experience</span> in building modern, scalable web applications.
        </p>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I specialize in developing clean and efficient applications using technologies like
          <span className="font-semibold text-black"> React</span>, <span className="font-semibold text-black">Angular</span>,
          <span className="font-semibold text-black"> Node.js</span>, and <span className="font-semibold text-black">Laravel</span>. 
          I've contributed to projects in domains such as ERP systems, medical record reviews (MRR), and automated billing solutions.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          I'm a firm believer in writing maintainable code, integrating APIs efficiently, optimizing performance, and crafting user-centric UIs that enhance the overall experience.
        </p>
      </div>
    </section>
  );
}
