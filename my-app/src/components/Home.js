import Competence from "./Competence"
import Education from "./Education"
import Experience from "./Experience"
import About from "./About"
import Sidebar from "./Sidebar"



const Home = () => {
    return (
      <div className="flex-container">
        
        <aside className="sidebar">


        <Sidebar />
        
        </aside>
        
        
        <main className="main">
        
        <Education />
        <Competence />
        <Experience />
        <About />
        </main>

    </div>
    )
}


export default Home