import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='overflow-x-hidden text-neutral-300 antialised slec selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
  <div className="fixed inset-0 -z-10 h-full w-full">
    <div className="relative h-full w-full bg-slate-950">
      {/* Main radial gradient for depth */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(120%_120%_at_50%_10%,#0f172a_30%,#4338ca_70%,#6d28d9_100%)]"></div>

      {/* Blob #1 - Left */}
      <div className="absolute left-[-10%] top-[20%] h-[400px] w-[500px] rotate-12 rounded-[50%] bg-[radial-gradient(circle_farthest-side,rgba(67,56,202,0.3),rgba(0,0,0,0))] blur-2xl"></div>

      {/* Blob #2 - Right */}
      <div className="absolute right-[-15%] top-[30%] h-[500px] w-[600px] -rotate-12 rounded-[50%] bg-[radial-gradient(circle_farthest-side,rgba(109,40,217,0.3),rgba(0,0,0,0))] blur-3xl"></div>

      {/* Blob #3 - Bottom */}
      <div className="absolute bottom-[-20%] left-[25%] h-[450px] w-[550px] rotate-6 rounded-[50%] bg-[radial-gradient(circle_farthest-side,rgba(99,102,241,0.2),rgba(0,0,0,0))] blur-2xl"></div>
    </div>
  </div>
</div>


      </div>
      
      <div className='container mx-auto px-8 '>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
