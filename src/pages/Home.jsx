export default function Home() {
  return (
    <section className="bg-white min-h-screen py-16 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* Profile Icon */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
          KP
        </div>

        {/* Name & Role */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Karuppusamy P</span>
        </h1>

        {/* Short Bio */}
        <p className="text-xl text-gray-600 mb-4">
          A Passionate Full-Stack Developer crafting modern web applications using React, Angular, Node.js, Laravel, PostgreSQL & MongoDB.
        </p>

        {/* Location and Experience */}
        <p className="text-gray-500 mb-6">
          📍 Madurai, Tamilnadu &nbsp; | &nbsp; 💼 3 Years Experience
        </p>

       
      </div>
    </section>
  );
}
