const Skills = () => (
  <section id="skills" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        My <span className="gradient-text">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Languages & Frameworks */}
        <div className="bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-blue-400 flex items-center">
            <i className="fas fa-code mr-2"></i> Languages & Frameworks
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Python</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>FastAPI/Flask</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI/ML Tools */}
        <div className="bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-purple-400 flex items-center">
            <i className="fas fa-brain mr-2"></i> AI/ML Tools
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Agno/LLMs</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Azure AI Foundry</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div><div>
              <div className="flex justify-between mb-1">
                <span>RAG</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>OpenAI/Gemini</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Databases & DevOps */}
        <div className="bg-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center">
            <i className="fas fa-server mr-2"></i> Databases & DevOps
          </h3>
          <div className="space-y-4">
            <div>
              <div>
              <div className="flex justify-between mb-1">
                <span>Azure</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
              <div className="flex justify-between mb-1">
                <span>PostgreSQL</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Docker</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>VectorDBs</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-16 mb-8 text-center text-yellow-400">
        Technologies I Work With
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-python text-3xl text-blue-400 mb-2"></i>
          <span>Python</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-js text-3xl text-yellow-400 mb-2"></i>
          <span>JavaScript</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-bolt text-3xl text-green-400 mb-2"></i>
          <span>FastAPI</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-eye text-3xl text-green-300 mb-2"></i>
          <span>Azure</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-crosshairs text-3xl text-red-400 mb-2"></i>
          <span>GEN AI</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-react text-3xl text-blue-500 mb-2"></i>
          <span>React</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fas fa-database text-3xl text-purple-400 mb-2"></i>
          <span>PostgreSQL</span>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 flex flex-col items-center hover:bg-gray-600 transition duration-300">
          <i className="fab fa-docker text-3xl text-blue-300 mb-2"></i>
          <span>Docker</span>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
