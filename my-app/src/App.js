import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"



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
    </div>
    
    </BrowserRouter>
  )
}

export default App;
