import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Professional Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <p className="text-gray-500">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const experiences = [
  {
    role: "Software Developer",
    company: "RideInfo Tech Systems",
    period: "August 2024 – Present",
    responsibilities: [
      "Developed and maintained backend services using Python and Django/Flask frameworks to support web applications.",
      "Integrated RESTful and SOAP-based APIs for data exchange between different modules, resulting in a 30% improvement in system reliability.",
      "Integrated microservices architecture using Python and Flask, increasing modularity and deployment efficiency.",
      "Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 25%."
    ]
  },
  {
    role: "Application Development Associate",
    company: "Accenture Solutions",
    period: "Jan 2022 – Dec 2022",
    responsibilities: [
      "Developed scalable Python-based software solutions for the finance sector, enhancing system performance by 15%.",
      "Developed and documented SOAP and REST APIs, streamlining data integration and reducing issues by 30%.",
      "Spearheaded automated testing frameworks development, cutting manual testing time by 40%.",
      "Optimized financial Data Processing workflows, improving transaction processing speed by 20%."
    ]
  },
  {
    role: "Junior Developer",
    company: "PARCSS Systems",
    period: "April 2020 – Dec 2021",
    responsibilities: [
      "Developed scalable backend services using Django, Flask and Node.js for healthcare applications.",
      "Collaborated on responsive interfaces using React.js and TypeScript.",
      "Enhanced SQL database efficiency, improving system speed by 20%.",
      "Integrated Machine Learning models, increasing user engagement by 15%."
    ]
  }
];

export default Experience;