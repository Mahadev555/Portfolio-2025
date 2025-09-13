interface Project {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  technologies: string[];
  borderColor: string;
}

const Projects = () => {
  // Combine all projects into a single array
  const projects: Project[] = [
    {
      icon: "robot",
      iconColor: "blue",
      title: "Query-Verse (QnA platform)",
      description:
        "Query Verse is a Senior-Junior Interaction Web Application, developed using the MERN (MongoDB, Express.js,React, Node.js) stack. It is a dynamic platform designed to facilitate knowledge sharing and mentoring within an educational context.",
      technologies: [
        "Node.js",
        "React",
        "MongoDB",
        "Gemini",
        "Express.js",
      ],
      borderColor: "blue"
    },
    {
      icon: "comments",
      iconColor: "green",
      title: "Agentic Rag",
      description:
        "A modern web application that combines RAG (Retrieval-Augmented Generation) with agentic capabilities for intelligent document processing and querying. This project uses the Agno framework for building intelligent agents that can understand and process documents effectively.",
      technologies: [
        "RAG",
        "Agno",
        "Python (FastAPI)",
        "Google Gemini",
        "Chatbot"
      ],
      borderColor: "green"
    },
    {
      icon: "house",
      iconColor: "yellow",
      title: "Agents-Hub",
      description:
        "a multi-agent system platform featuring agent management, chat interactions, and a React frontend. Includes FastAPI backend, PostgreSQL database integration, real-time AI agent chat, and scalable configuration for team and host agents",
      technologies: [
        "FastAPI",
        "React",
        "Agno",
        "Gemini"
      ],
      borderColor: "yellow"
    },
   
    {
      icon: "eye",
      iconColor: "red",
      title: "ServiceNow-MCP",
      description:
        "ServiceNow-MCP provides Python tools to create, update, retrieve, and delete ServiceNow tickets.It implements Model Context Protocol (MCP) with both stdio and HTTPS support, making it ideal for AI agents to interact with ServiceNow.",
      technologies: [
        "Python"
      ],
      borderColor: "red"
    }
    
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        {/* Show all projects in a single section */}
        <ProjectSection title="Projects" textColor="blue" projects={projects} />
      </div>
    </section>
  )
}

const ProjectSection = ({ title, textColor, projects }: { title: string; textColor: string; projects: Project[] }) => (
  <>
    <h3 className={`text-2xl font-semibold mb-8 text-${textColor}-400`}>{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </>
)

const ProjectCard = ({ icon, iconColor, title, description, technologies, borderColor }: Project) => (
  <div className={`project-card rounded-xl p-6 border border-gray-700 hover:border-${borderColor}-400 transition duration-300 card-hover`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <i className={`fas fa-${icon} text-3xl text-${iconColor}-400 mb-3`}></i>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
      </div>
      <div className="flex space-x-2">
        <a href="#" className={`text-gray-400 hover:text-${iconColor}-400 transition duration-300`}>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => {
        // Assign color classes based on technology name for accurate tag coloring
        let colorClass = "";
        switch (tech) {
          case "FastAPI":
          case "Python":
          case "RAG":
          case "Flask":
          case "OpenCV":
          case "Django":
            colorClass = "bg-blue-900 text-blue-300";
            break;
          case "Google Gemini":
          case "OpenAI":
          case "DLIB":
          case "React":
          case "LangChain":
            colorClass = "bg-purple-900 text-purple-300";
            break;
          case "PGVector":
          case "Enterprise AI":
          case "Cryptography":
            colorClass = "bg-green-900 text-green-300";
            break;
          case "Data Generation":
          case "Chatbot":
          case "YouTube API":
          case "Docker":
          case "Computer Vision":
            colorClass = "bg-yellow-900 text-yellow-300";
            break;
          default:
            colorClass = "bg-blue-900 text-blue-300";
        }
        // Special case for "Cryptography" and "Enterprise AI"
        if (tech === "Cryptography" || tech === "Enterprise AI") {
          colorClass = "bg-green-900 text-green-300";
        }
        // Special case for "Docker"
        if (tech === "Docker") {
          colorClass = "bg-yellow-900 text-yellow-300";
        }
        // Special case for "React"
        if (tech === "React") {
          colorClass = "bg-purple-900 text-purple-300";
        }
        return (
          <span key={index} className={`text-xs ${colorClass} px-2 py-1 rounded-full`}>
            {tech}
          </span>
        );
      })}
    </div>
  </div>
)

export default Projects
