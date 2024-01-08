import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">  
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/About" element={<About/>}/>
      <Route path ="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
