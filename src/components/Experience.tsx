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
    role: "Full Stack Engineer",
    company: "RideInfo Tech Systems",
    period: "August 2024 – May 2025",
    responsibilities: [
      "Developed scalable single-page applications using React.js, integrating with backend APIs deployed via AWS Lambda for seamless performance and scalability.",
      "Created AI-powered chatbots using OpenAI APIs to automate customer support and streamline internal workflows.",
      "Utilized AWS services such as S3, API Gateway, and DynamoDB to manage application data with high availability and low latency.",
      "mbedded Generative AI features such as content summarization and prompt-based automation to enhance user engagement and productivity.",
      "Automated deployment workflows with Docker containers and GitHub Actions, enabling fast and reliable CI/CD pipelines."
    ]
  },
  {
    role: "Application Development Associate",
    company: "Accenture Solutions",
    period: "August 2022 – Dec 2022",
    responsibilities: [
      "Developed and maintained full stack web applications using Node.js for backend APIs and React.js for building dynamic, responsive user interfaces.",
      "Built interactive dashboards and reusable, data-driven components using custom React hooks for enhanced user experience.",
      "Migrated legacy systems to the AWS Cloud, utilizing EC2, RDS, and CloudFront for secure and scalable hosting.",
      "Optimized database queries and enhanced performance for financial data processing workflows using PostgreSQL, improving transaction processing speed by 20%."
    ]
  },
  {
    role: "Front End Developer",
    company: "Skill Safari",
    period: "Jan 2020 – March 2020",
    responsibilities: [
      "Developed and maintained user-friendly web pages that provide seamless user experiences across various devices, ensuring optimal performance and accessibility.",
      "Developed modular UI components in React and ensured cross-browser compatibility.",
      "Assisted in integrating RESTful APIs with frontend and optimizing performance using lazy loading and code splitting."

    ]
  }
];

export default Experience;