import React from "react";

const projects = [
  {
    title: "MRR – Medical Record Review",
    company: "Rapid Care Transcription Pvt. Ltd.",
    description: [
      "Human accident file management system for medical reviewers.",
      "Upload, view, and summarize scanned documents (PDF, DOCX, JPEG).",
      "Patient treatment history shown in a visual timeline format.",
      "Quick note tagging, reviewer summaries, and approval workflow.",
      "Secure login with role-based access (Admin, Reviewer, Supervisor).",
      "Search/filter medical records by date, case ID, or patient name.",
      "Email/SMS notifications for file assignment and status change.",
      // "Built with React (Frontend), Laravel (Backend), and PgSQL (DB)."
    ],
    link: "#"
  },
  {
    title: "ERP Billing Software",
    company: "Elroi Software Solution",
    description: [
      "Purchase Module: Supplier management, purchase bills, purchase orders.",
      "Sales Module: sales invoice and sales receipt.",
      "Asset Management: Asset maintenance, transfer, and depreciation tracking.",
      "Recurring Billing: Monthly/Annual auto invoice generation.",
      "Reports: Export filtered reports in PDF/Excel format.",
      "Reminder notification for asset maintenance.",
      // "Built with React (Frontend), Laravel, Node.js (Backend), and PgSQL, MongoDB.",
    ],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="bg-white py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">💼 Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 italic mb-3">🏢 {project.company}</p>

              <ul className="list-disc list-inside text-gray-700 text-sm mb-4 space-y-1">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* <a
                href={project.link}
                className="inline-block mt-2 text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 View Project
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
