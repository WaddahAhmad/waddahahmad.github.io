import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Server, Cloud, GitBranch, Box, Layers, Zap, Database, Shield, ChevronDown, Phone, MapPin } from 'lucide-react';

const DevOpsPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skills = [
    { name: 'Terraform', icon: '🏗️', color: '#844FBA', category: 'IaC' },
    { name: 'Kubernetes', icon: '☸️', color: '#326CE5', category: 'Orchestration' },
    { name: 'AWS', icon: '☁️', color: '#FF9900', category: 'Cloud' },
    { name: 'Azure', icon: '☁️', color: '#0078D4', category: 'Cloud' },
    { name: 'GitHub Actions', icon: '⚡', color: '#2088FF', category: 'CI/CD' },
    { name: 'Jenkins', icon: '🔧', color: '#D24939', category: 'CI/CD' },
    { name: 'ArgoCD', icon: '🚀', color: '#EF7B4D', category: 'GitOps' },
    { name: 'Ansible', icon: '⚙️', color: '#EE0000', category: 'Config' },
    { name: 'Prometheus', icon: '📊', color: '#E6522C', category: 'Monitoring' },
    { name: 'Grafana', icon: '📈', color: '#F46800', category: 'Monitoring' },
    { name: 'Docker', icon: '🐳', color: '#2496ED', category: 'Containers' },
    { name: 'Python', icon: '🐍', color: '#3776AB', category: 'Automation' },
    { name: 'Helm', icon: '⎈', color: '#0F1689', category: 'K8s Tools' },
    { name: 'ELK Stack', icon: '🔍', color: '#00BFB3', category: 'Logging' },
    { name: 'Linux', icon: '🐧', color: '#FCC624', category: 'OS' },
    { name: 'DevSecOps', icon: '🔐', color: '#00ff99', category: 'Security' }
  ];

  const experience = [
    {
      company: 'SilaInsights',
      location: 'Dubai, UAE',
      role: 'DevOps Engineer',
      period: 'Jan 2024 – Present',
      achievements: [
        'Owned end-to-end production infrastructure achieving 25% increase in system reliability',
        'Designed cost-optimized serverless architecture on Azure with Terraform, reducing costs by 40%',
        'Automated infrastructure provisioning with Ansible achieving 80% reduction in manual setup time',
        'Streamlined CI/CD with GitHub Actions, boosting deployment throughput by 40%',
        'Deployed observability stack (Grafana, Prometheus, Loki) reducing incident detection time by 60%'
      ]
    },
    {
      company: 'Antechip Gaming Services',
      location: 'Dubai, UAE',
      role: 'DevOps Engineer',
      period: 'Aug 2023 – Jan 2024',
      achievements: [
        'Re-architected core infrastructure achieving 70% reduction in hosting costs',
        'Accelerated release cycles by 30% through CI/CD enhancements',
        'Strengthened security with VPN access controls and infrastructure monitoring',
        'Optimized database performance resolving slow queries'
      ]
    },
    {
      company: 'Freelance',
      location: 'Remote',
      role: 'DevOps Consultant',
      period: 'Feb 2021 – Jan 2024',
      achievements: [
        'Designed and implemented microservices migrations for multiple client systems',
        'Developed reusable IaC templates with Terraform for AWS and Azure deployments',
        'Managed Kubernetes clusters with HA, security, monitoring, and continuous delivery'
      ]
    }
  ];

  const projects = [
    {
      title: 'Jenkins on AWS with Terraform & Ansible',
      description: 'Automated deployment of Jenkins master-nodes architecture on AWS using Terraform, with automatic configuration management via Ansible.',
      tech: ['Terraform', 'Ansible', 'AWS', 'Jenkins']
    },
    {
      title: 'GitOps Microservices Platform',
      description: 'Built microservices platform with sync/async communication on Kubernetes, deployed via ArgoCD webhook with Helmfile.',
      tech: ['Kubernetes', 'ArgoCD', 'Helm', 'GitOps']
    },
    {
      title: 'Azure Serverless Application',
      description: 'Complete serverless application on Azure with database provisioning via Terraform and full CI/CD pipeline from GitHub Actions.',
      tech: ['Azure', 'Terraform', 'GitHub Actions', 'Serverless']
    },
    {
      title: 'Enterprise Security Infrastructure',
      description: 'Wide-scale AWS infrastructure deployment with Zero Trust architecture, VPNs, and automated security scanning in CI/CD pipelines.',
      tech: ['Terraform', 'AWS', 'DevSecOps', 'Zero Trust']
    },
    {
      title: 'Observability Stack',
      description: 'Custom monitoring dashboards for Linux systems with integrated log aggregation, metrics collection, and alerting.',
      tech: ['Grafana', 'Prometheus', 'Loki', 'ELK']
    },
    {
      title: 'Multi-Cloud Automation',
      description: 'Hybrid cloud infrastructure automation using Terraform and Ansible across AWS and Azure environments.',
      tech: ['Terraform', 'Ansible', 'AWS', 'Azure']
    }
  ];

  const certifications = [
    'CCNA: Enterprise Networking, Security, and Automation',
    'DevOps on AWS',
    'Linux Server Management',
    'Ansible For DevOps',
    'Python For Everybody'
  ];

  useEffect(() => {
    setTimeout(() => {
      setAnimatedSkills(skills.map((_, i) => i));
    }, 500);
  }, []);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gray-900 bg-opacity-90 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">WA</div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#hero" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-green-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute animate-float" style={{left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animationDelay: `${Math.random()*5}s`, animationDuration: `${5+Math.random()*10}s`}}>
              <div className="w-2 h-2 bg-green-400 rounded-full opacity-30" />
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6 animate-fadeIn">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-gradient">
              Waddah Ahmad
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">Senior DevOps Engineer</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              4+ years architecting scalable CI/CD pipelines and optimizing cloud infrastructure. 
              Proven track record of reducing costs by 70%, improving deployment frequency by 40%.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
              <Mail className="w-5 h-5" />Get In Touch
            </a>
            <a href="https://linkedin.com/in/waddah-ahmad" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all flex items-center gap-2">
              <Linkedin className="w-5 h-5" />LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <span>+971 52 107 4666</span>
            </div>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-green-400" />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">About Me</h2>
          <p className="text-center text-gray-400 mb-12">Passionate about automation, cloud architecture, and building resilient systems</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />Impact & Achievements
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">▹</span>
                  <span>Reduced infrastructure costs by <strong className="text-green-400">70%</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">▹</span>
                  <span>Improved deployment frequency by <strong className="text-green-400">40%</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">▹</span>
                  <span>Achieved <strong className="text-green-400">80%</strong> reduction in setup time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">▹</span>
                  <span>Leading 24/7 on-call operations</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gray-800 border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />Expertise Areas
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-400">▹</span><span>Cloud Infrastructure (AWS, Azure)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400">▹</span><span>Kubernetes & Container Orchestration</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400">▹</span><span>Infrastructure as Code (Terraform, Ansible)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400">▹</span><span>CI/CD Pipeline Architecture</span></li>
                <li className="flex items-start gap-2"><span className="text-green-400">▹</span><span>DevSecOps & Zero Trust Security</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <h3 className="text-xl font-bold text-center mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {certifications.map((cert, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-purple-500 bg-opacity-20 text-purple-300 border border-purple-500 border-opacity-30 text-sm">{cert}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">Technical Arsenal</h2>
          <p className="text-center text-gray-400 mb-16">Mastering modern DevOps tools and practices</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`group relative p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-400 transition-all hover:shadow-lg hover:scale-105 cursor-pointer ${animatedSkills.includes(index) ? 'animate-fadeIn' : 'opacity-0'}`} style={{animationDelay: `${index*0.05}s`}}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="font-semibold text-gray-200 group-hover:text-green-400 transition-colors mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-500">{skill.category}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-4">Cloud & Infrastructure</h3>
              <p className="text-sm text-gray-400">AWS • Azure • Hybrid Cloud • Networking • VPNs • Linux</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <h3 className="text-lg font-bold text-purple-400 mb-4">Databases</h3>
              <p className="text-sm text-gray-400">PostgreSQL • MySQL • MongoDB • MSSQL • Qdrant Vector DB</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <h3 className="text-lg font-bold text-green-400 mb-4">Development</h3>
              <p className="text-sm text-gray-400">Python • FastAPI • Django • Shell Scripting • PHP</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">Professional Journey</h2>
          <p className="text-center text-gray-400 mb-16">Building and scaling infrastructure</p>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-purple-500" />
            
            {experience.map((job, index) => (
              <div key={index} className="relative pl-20 pb-12 animate-fadeIn" style={{animationDelay: `${index*0.2}s`}}>
                <div className="absolute left-5 w-6 h-6 rounded-full bg-green-400 border-4 border-gray-900" />
                
                <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-400 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-green-400">{job.role}</h3>
                      <p className="text-lg text-gray-300">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">{job.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Zap className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-center text-gray-400 mb-16">Production-ready DevOps solutions</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-xl hover:scale-105 animate-fadeIn" style={{animationDelay: `${index*0.1}s`}}>
                <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-green-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-purple-500 bg-opacity-20 text-purple-300 border border-purple-500 border-opacity-30">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-800 bg-opacity-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">Let's Connect</h2>
          <p className="text-center text-gray-400 mb-16">Ready to discuss your next infrastructure challenge?</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:waddah.t.ahmad@gmail.com" className="group p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-400 transition-all hover:shadow-lg text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-400 text-sm">waddah.t.ahmad@gmail.com</p>
            </a>

            <a href="https://linkedin.com/in/waddah-ahmad" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg text-center">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">linkedin.com/in/waddah-ahmad</p>
            </a>

            <a href="tel:+971521074666" className="group p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-green-400 transition-all hover:shadow-lg text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+971 52 107 4666</p>
            </a>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-r from-green-400/10 to-purple-500/10 border border-gray-700">
            <p className="text-gray-400 mb-2">
              <MapPin className="w-4 h-4 inline mr-2 text-green-400" />
              Based in Dubai, UAE • Available for remote opportunities
            </p>
            <p className="text-sm text-gray-500">Languages: Arabic, English</p>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">© 2025 Waddah Ahmad. Architecting the future of cloud infrastructure.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsPortfolio;
