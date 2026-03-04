import { useState, useEffect } from "react";

export const HeroSection = () => {
  const phrases = [
    "MernStack Engineer",
    "With Hands On AWS(EC2)",
    "And With Experience of 2 years in DOCKER GITHUB ACTIONS CI/CD PIPELINES",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentPhraseIndex]);

  // Track mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        style={{
          position: "fixed",
          top: cursorPos.y,
          left: cursorPos.x,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999
        }}
      >
        <div
          style={{
            width: "26px",
            height: "26px",
            border: "2px solid black",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "black",
              borderRadius: "50%"
            }}
          ></div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Hero Content */}
          <div className="min-h-screen flex items-center justify-center -mt-16 md:-mt-20">
            <div className="w-full grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hello, <span className="text-purple-500">my name is</span>{" "}
                  <span className="font-[cursive] text-purple-400">Saad Kamran</span>
                </h2>

                <h1 className="text-4xl md:text-5xl font-bold mt-4">
                  {" "}
                  <span className="text-purple-500">{displayedText}</span>
                  <span className="border-r-2 border-purple-500 animate-pulse ml-1"></span>
                </h1>

                <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  I am deeply passionate about the world of technology, driven by curiosity 
                  and creativity. I thrive on solving problems, crafting impactful solutions, 
                  and constantly evolving to make a meaningful contribution to the tech industry.
                </p>

                <a
                  href="/resume/Resume Final.pdf"
                  download
                  className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
                >
                  Download Resume
                </a>
              </div>

              {/* Right Image with Floating Animation */}
              <div className="flex justify-center relative">
                <div 
                  className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
                  style={{
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-white dark:border-gray-900 shadow-[0_0_60px_rgba(168,85,247,0.7)] hover:shadow-[0_0_80px_rgba(168,85,247,0.9)] transition-all duration-300">
                    <img
                      src="/images/Portfolio.jpeg"
                      alt="Saad Kamran"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
<div className="py-16">
  <h2 className="text-3xl font-bold mb-12 text-center">
    My <span className="text-purple-500">Expertise</span>
  </h2>

  <div className="max-w-5xl mx-auto">
    {/* First Row */}
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {/* HTML5 */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
          alt="HTML5" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">HTML5</span>
      </div>

      {/* CSS3 */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
          alt="CSS3" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">CSS3</span>
      </div>

      {/* JavaScript */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
          alt="JavaScript" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">JavaScript</span>
      </div>

      {/* TypeScript */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
          alt="TypeScript" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">TypeScript</span>
      </div>

      {/* Tailwind CSS */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"  
          alt="Tailwind CSS" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Tailwind CSS</span>
      </div>
    </div>

    {/* Second Row */}
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      {/* React */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
          alt="React" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">React</span>
      </div>

      {/* Next.js */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
          alt="Next.js" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300 invert dark:invert-0"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Next.js</span>
      </div>

      {/* Node.js */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
          alt="Node.js" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Node.js</span>
      </div>

      {/* Express */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
          alt="Express" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Express</span>
      </div>

      {/* MongoDB */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
          alt="MongoDB" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">MongoDB</span>
      </div>
    </div>

    {/* Third Row */}
    <div className="flex flex-wrap justify-center gap-4">
      {/* PostgreSQL */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
          alt="PostgreSQL" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">PostgreSQL</span>
      </div>

      {/* Redis */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" 
          alt="Redis" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Redis</span>
      </div>

      {/* AWS EC2 */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/aws.svg" 
          alt="AWS EC2" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">AWS EC2</span>
      </div>

      {/* Docker */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
          alt="Docker" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Docker</span>
      </div>

      {/* GitHub Actions */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.iconscout.com/icon/free/png-256/github-3521604-2945124.png" 
          alt="GitHub Actions" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">GitHub Actions</span>
      </div>

      {/* Redux */}
      <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" 
          alt="Redux" 
          className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Redux</span>
      </div>
    </div>
  </div>
</div>
      </div>
      </section>
      {/* Floating Animation Style */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
      `}</style>
    </>
  );
};
