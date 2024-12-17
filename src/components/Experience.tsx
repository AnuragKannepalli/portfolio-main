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
      "Assisted in migrating a monolithic application to a microservices architecture, improving scalability and maintainability for telecommunications applications.",
      "Developed dynamic, responsive user interfaces using ReactJS and Node.js, ensuring a seamless user experience.",
      "Created and optimized backend services with Java Spring Boot, including designing and implementing RESTful APIs and performing comprehensive testing with Postman and unit tests.",
      "Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 25%."
    ]
  },
  {
    role: "Application Development Associate",
    company: "Accenture Solutions",
    period: "Jan 2022 – Dec 2022",
    responsibilities: [
      "Developed scalable Java-based software solutions using Spring Boot for the finance sector, enhancing system performance by 15%.",
      "Designed and implemented RESTful APIs to facilitate seamless integration between systems, reducing data communication errors by 30%.",
      "Built automated unit and integration testing frameworks using JUnit and Mockito, cutting manual testing time by 40%.",
      "Optimized database queries and enhanced performance for financial data processing workflows using PostgreSQL, improving transaction processing speed by 20%."
    ]
  },
  {
    role: "Junior Developer",
    company: "PARCSS Systems",
    period: "April 2020 – Dec 2021",
    responsibilities: [
      "Developed scalable backend services using Java and Spring Boot for healthcare applications, improving system reliability and performance.",
      "Collaborated on building responsive user interfaces using React.js and TypeScript to enhance user experience.",
      "Optimized SQL database performance, improving query efficiency and increasing overall system speed by 20%.",
      "Integrated data processing modules and implemented RESTful APIs, streamlining system operations and improving data flow across services.",
    ]
  }
];

export default Experience;