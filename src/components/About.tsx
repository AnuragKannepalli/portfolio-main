import React from 'react';
import { BookOpen, Award, Briefcase, Code, Database, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Skilled Software Engineer with three years of experience in developing and deploying applications using modern programming languages and frameworks. Proficient in designing object-oriented solutions, working with various database technologies, and implementing microservices architecture.
            </p>
            
            <div className="flex items-center space-x-4">
              <BookOpen className="text-blue-600" />
              <div className="flex-1">
                <h3 className="font-semibold">Education</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="text-blue-600 w-5 h-5" />
                    <div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">MS in Computer Science</p>
                        
                      </div>
                      <p className="text-gray-500">University of Central Missouri</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="text-blue-600 w-5 h-5" />
                    <div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">BS in Electronics and Communications</p>
                        
                      </div>
                      <p className="text-gray-500">Jawaharlal Nehru University</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Award className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Certifications</h3>
                <a 
                  href="https://learn.microsoft.com/en-us/users/venkatasaianuragkannepalli-6801/credentials/83441ed01032d37b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-2"
                >
                  <img 
                    src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
                    alt="Microsoft Certification"
                    className="w-6 h-6"
                  />
                  <span>Microsoft Azure Developer Associate</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Code className="w-6 h-6 text-blue-600" />
                  <span>Front End Developer</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Database className="w-6 h-6 text-blue-600" />
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Briefcase className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-gray-600">Software Developer at RideInfo Tech Systems</p>
                <p className="text-gray-600">Application Development Associate at Accenture</p>
                <p className="text-gray-600">Junior Developer at PARCSS Systems</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-tag text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill.name}
                <div className="skill-tooltip">
                  {skill.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const skills = [
  {
    name: "Python",
    description: "Backend development, API integration, Data processing"
  },
  {
    name: "JavaScript",
    description: "Frontend development, DOM manipulation, Async programming"
  },
  {
    name: "TypeScript",
    description: "Type-safe development, Enhanced IDE support"
  },
  {
    name: "React.js",
    description: "Component-based UI development, State management"
  },
  {
    name: "Node.js",
    description: "Server-side JavaScript, API development"
  },
  {
    name: "Django",
    description: "Full-stack Python web framework, ORM"
  },
  {
    name: "Flask",
    description: "Lightweight Python web framework, RESTful APIs"
  },
  {
    name: "AWS",
    description: "Cloud infrastructure, Serverless computing"
  },
  {
    name: "Azure",
    description: "Cloud services, DevOps, App deployment"
  },
  {
    name: "Docker",
    description: "Containerization, Microservices architecture"
  },
  {
    name: "Jenkins",
    description: "CI/CD pipelines, Automated deployment"
  },
  {
    name: "PostgreSQL",
    description: "Relational database, Complex queries"
  },
  {
    name: "MySQL",
    description: "Database design, Performance optimization"
  },
  {
    name: "REST APIs",
    description: "API design, Integration, Documentation"
  },
  {
    name: "Git",
    description: "Version control, Collaboration, Branching strategies"
  },
  {
    name: "Agile",
    description: "Scrum, Sprint planning, Daily standups"
  }
];

export default About;