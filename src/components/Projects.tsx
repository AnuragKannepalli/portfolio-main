import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="skill-tag">{tech}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.github && (
                  <a href={project.github} className="social-link flex items-center">
                    <Github size={18} className="mr-2" />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="social-link flex items-center">
                    <ExternalLink size={18} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive system for managing student information and operations with a user-friendly interface.",
    technologies: ["Python", "HTML/CSS", "MySQL"],
    github: "https://github.com/AnuragKannepalli/Student-Management-system-Python",
  },
  {
    title: "Exponential Calculation Tool",
    description: "A scalable web application for performing complex exponential calculations with efficient data storage.",
    technologies: ["HTML/CSS", "AWS Amplify", "DynamoDB"],
    
  }
];

export default Projects;