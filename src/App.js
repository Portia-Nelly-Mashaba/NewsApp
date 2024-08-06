
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import React, { useState } from 'react';
// import  Categories from './Components/Categories';
import FetchData from "./Components/FetchData";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {


  return (
   
    <BrowserRouter>
    <Navbar  />
    <Routes>
      <Route  path='/' element={<Home />}/> 
      <Route  path='/general' element={<FetchData cat="general" />}/> 
      <Route  path='/business' element={<FetchData cat="business"  />}/> 
      <Route  path='/entertainment' element={<FetchData cat="entertainment" />}/> 
      <Route  path='/health' element={<FetchData cat="health" />}/> 
      <Route  path='/science' element={<FetchData cat="science" />}/> 
      <Route  path='/technology' element={<FetchData cat="technology" />}/> 
      <Route  path='/sports' element={<FetchData cat="sports" />}/> 
    </Routes>
    <Footer />
    </BrowserRouter>
  );
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
    
}

export default App;
