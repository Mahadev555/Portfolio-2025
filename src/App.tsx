import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Projects from './components/Sections/Projects'
import Skills from './components/Sections/Skills'
import Certifications from './components/Sections/Certifications'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'
import './styles/Portfolio.css'

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
