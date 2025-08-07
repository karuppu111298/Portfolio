import React from "react";

const Resume = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">Resume</h2>
          <p className="text-gray-600">
            Explore my academic background and connect with me on professional platforms.
          </p>
        </div>

        {/* Download Resume Button */}
         <div className="mb-10">
          <a
            href="/assets/resume/KaruppusamyP.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition font-semibold"
          >
            📄 View Resume
          </a>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Education</h3>
          <ul className="list-disc pl-6 text-gray-800">
            <li>
              <strong>B.E. in Electrical and Electronic Engineering</strong> – KLNCIT (2016–2020)
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mb-2">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Connect with Me</h3>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <a
              href="https://github.com/karuppu111298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-black underline"
            >
              🔗 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karuppusamy-p-829270356"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-black underline"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
