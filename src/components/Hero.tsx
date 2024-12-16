import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const CodeBackground = () => {
  const codeLines = [
    "const developer = {",
    "  name: 'Venkata Sai Anurag',",
    "  skills: ['React', 'Node.js', 'Python'],",
    "  passion: 'Building amazing web apps'",
    "};",
    "function createSolution(problem) {",
    "  return solve(problem, developer.skills);",
    "}",
    "// More code coming soon...",
    "class FullStackDev extends Developer {",
    "  constructor() {",
    "    super();",
    "    this.frontend = ['React', 'TypeScript'];",
    "    this.backend = ['Node.js', 'Python'];",
    "  }",
    "}"
  ];

  return (
    <div className="code-background">
      <div className="flex flex-col gap-6">
        {[0, 1, 2].map((col) => (
          <div key={col} className="animate-slide-up" style={{ animationDelay: `${col * 2}s` }}>
            {codeLines.map((line, idx) => (
              <div key={idx} className="code-line text-blue-800">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
        <CodeBackground />
      </div>
      
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <h1 className="animate-fade-in text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          VENKATA SAI ANURAG KANNEPALLI
        </h1>
        <p className="animate-fade-in-delay-1 text-xl md:text-2xl text-gray-600 mb-8">
          Software Engineer | Full Stack Developer | Cloud Expert
        </p>
        <div className="animate-fade-in-delay-1 flex justify-center space-x-6 mb-12">
          <a href="https://github.com/AnuragKannepalli" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/venkatasaianurag-kannepalli" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:anurag.kannepalli@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
        <div className="animate-fade-in-delay-2 flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;