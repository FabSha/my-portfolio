import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link} from "react-scroll"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"



function App() {
  return (
    <BrowserRouter>
    
    <div>
      <Header></Header>

      
    </div>
    
    <div className="container">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" exact element={<Contact></Contact>}></Route>
      
  

      </Routes>
      <Footer></Footer>
    </div>
    
    </BrowserRouter>
    
  )
}

export default App;
