import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Links from './components/Links/links';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Links className= 'contact-me'/>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path='/about' element= {<About/>}/>
          <Route path='/skills' element= {<Skills/>}/>
          <Route path='/projects' element= {<Projects/>}/>
          <Route path='/contact' element= {<Contact/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
