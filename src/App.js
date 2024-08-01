
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import  Categories from './Components/Categories';
import Navbar from './Components/Navbar';


function App() {
  return (
   
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route  path='/' element={<Home />}/> 
      <Route  path='/general' element={<Categories cat="general" />}/> 
      <Route  path='/business' element={<Categories cat="business" />}/> 
      <Route  path='/entertainment' element={<Categories cat="entertainment" />}/> 
      <Route  path='/health' element={<Categories cat="health" />}/> 
      <Route  path='/science' element={<Categories cat="science" />}/> 
      <Route  path='/technology' element={<Categories cat="technology" />}/> 
      <Route  path='/sports' element={<Categories cat="sports" />}/> 
    </Routes>
    {/* <Routes>
      <Route  path='/' element={<Home />}/> 
      <Route  path='/politics' element={<General />}/>
      <Route  path='/business' element={<Business />}/>  
      <Route  path='/entertainment' element={<Entertainment />}/> 
      <Route  path='/health' element={<Health />}/> 
      <Route  path='/science' element={<Science />}/> 
      <Route  path='/technology' element={<Technology />}/>
      <Route  path='/sports' element={<Sports />}/> 
    </Routes> */}
    </BrowserRouter>
      );
}

export default App;
