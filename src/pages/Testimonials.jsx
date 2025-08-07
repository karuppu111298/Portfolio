import React from "react";

const testimonials = [
  {
    name: "Maya Pandi",
    role: "Team Lead – MRR Project",
    comment: "Karuppusamy’s dedication during the Medical Record Review project was outstanding. He handled accident case files with precision and always ensured timely delivery."
  },
  {
    name: "Tharageswari",
    role: "QA Analyst – MRR Project",
    comment: "Working with Karuppusamy was smooth. His ability to understand complex data structures and build efficient workflows made our QA process easier."
  },
  {
    name: "Bhavanesh",
    role: "Team Member – ERP Project",
    comment: "Karuppusamy played a key role in building the ERP Billing Software. He developed critical modules like Purchase, Sales, and Asset Management with great attention to detail."
  },
  {
    name: "Gopi",
    role: "Team Member – ERP Project",
    comment: "His knowledge of full-stack technologies and clear communication helped our team collaborate better. The recurring billing module he built works flawlessly."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-100 border-l-4 border-blue-500 p-6 rounded shadow">
            <p className="text-gray-700 italic mb-4">"{t.comment}"</p>
            <div className="text-right">
              <p className="text-blue-700 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
