export default function Home() {
  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Welcome to My Portfolio</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">👨‍💻 Karuppusamy P</h2>
          <p className="text-gray-600">Software Developer with 3+ years experience building web apps using React, Angular, Node.js, Laravel, MongoDB.</p>
        </div>

        {/* Skills Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">💡 Skills</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>React JS, Angular</li>
            <li>Node.js, Express.js</li>
            <li>Laravel, PHP</li>
            <li>MongoDB, PostgreSQL</li>
          </ul>
        </div>

        {/* Projects Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🚀 Projects</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>ERP Billing Software</li>
            <li>MRR – Medical Record Review</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
