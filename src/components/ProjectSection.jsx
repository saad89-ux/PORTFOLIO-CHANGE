import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Study Assistant",
    description: "AI Study Assistant is a Next.js and Gemini AI–powered learning platform that generates smart summaries, quizzes, flashcards with spaced repetition, and 24/7 AI chat support to deliver personalized, interactive study experiences.",
    image: "/images/AI.png",
    tags: ["NEXT.JS", "MONGODB", "Express.JS"],
    demoUrl: "https://webixus-ai-study-assistant.vercel.app/",
  },
  {
    id: 2,
    title: "BankingApp",
    description: `Register to securely report banking issues, track complaints in real time, and receive resolutions directly from your bank under structured regulatory oversight.

Customers can create accounts and log in normally to submit and monitor complaints. Bank Officer accounts are provisioned and managed exclusively by the SBP Admin to ensure controlled access and compliance.

SBP Admin (Demo Credentials — for project demonstration only, can be changed later):
Email: admin@sbp.gov.pk
Password: Admin@123`,
    image: "/images/Bankingapp.png",
    tags: ["React.JS", "NODEJS", "MONGODB","JWT"],
    demoUrl: "https://bankwise-connect.vercel.app/signup",
  },
  {
    id: 3,
    title: "Markivex",
    description: `A powerful, real-world MERN platform designed to streamline agency operations with secure, structured access control and seamless collaboration.

Customers can register and log in normally to access and manage their services. Editor accounts are created and managed exclusively by the Super Admin to ensure controlled content governance and operational security.

Super Admin (Demo Credentials — for project demonstration only, can be updated later):
Email: admin@markivex.com
Password: Admin@123`,
    image: "/images/Markivex.png",
    tags: ["NODEJS", "Expressjs", "Mongodb"],
    demoUrl: "https://markivex-hub.vercel.app/",
  },
  {
    id: 4,
    title: "Customer Support Managment System",
    description: `A powerful, production-ready MERN platform built to streamline agency operations with secure role-based access, intelligent content handling, and smooth team collaboration — engineered for scalability, reliability, and real-world performance.

Customers can register and log in normally to access services and manage their activities. Support Agent accounts are created and managed exclusively by the Manager to maintain structured oversight and controlled operational workflows.

Manager (Demo Credentials — for project demonstration only, can be updated later):
Email: superadmin@support.com
Password: SuperAdmin@123`,
    image: "/images/CSTMS.png",
    tags: ["Nodemon", "ZOd", "Helmet","MongoDb" , "React.js","TypeScript"],
    demoUrl: "https://cstms-frontend.vercel.app/",
  },
 

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(168,85,247,0.3)]"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-500 dark:text-purple-400 hover:bg-purple-500/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors duration-300 hover:scale-110 transform"
                      aria-label="View demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 text-center inline-flex items-center gap-2 hover:shadow-[0_5px_20px_rgba(168,85,247,0.4)] hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/saad89-ux"
          >
            Check My GitHub <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};