import profileImage from "../../assets/image.jpeg";

const About = () => {
  const details = [
    { icon: "map-marker-alt", color: "blue", title: "Location", value: "Pune, India" },
    { icon: "briefcase", color: "purple", title: "Focus Areas", value: "AI Engineering & Full-Stack" },
    { icon: "project-diagram", color: "green", title: "Projects", value: "10+ Completed" },
    { icon: "code", color: "yellow", title: "Languages", value: "Python, JavaScript" }
  ]

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <img  src={profileImage} alt="Mahadev Manerikar" className="w-full h-full rounded-full object-cover border-4 border-gray-800" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Innovating with Artificial Intelligence</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate AI Engineer with strong backend and ML development experience. I specialize in building intelligent systems using Generative AI, LLM integrations, Robust Backend and Security.
            </p>
            {/* ...existing about text... */}
            <div className="grid grid-cols-2 gap-4">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center">
                  <div className={`mr-3 text-${detail.color}-400`}>
                    <i className={`fas fa-${detail.icon} fa-lg`}></i>
                  </div>
                  <div>
                    <p className="font-semibold">{detail.title}</p>
                    <p className="text-gray-400 text-sm">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
