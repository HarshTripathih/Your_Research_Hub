import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Regsiter from './Components/Authentication/Regsiter';
import Contact from './Components/Contact/Contact';
import Discover from './Components/Discover/Discover';
import Faq from './Components/Faq/Faq';
import About from './Components/About/About';
import Researchers from './Components/Researcher/Researchers';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/discover' element={<Discover/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/register' element={<Regsiter/>}/>
    <Route path='/researchers' element={<Researchers/>}/>
    </Routes>
    </div>
  );
}

export default App;
