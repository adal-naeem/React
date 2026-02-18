import AIChat from './components/AIChat';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Credentials/>
        <Contact/>
      </main>
      <Footer/>
      <AIChat />
     </div>
  )
}

export default App