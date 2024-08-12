import React from 'react';
import Login from '../Components/Login'
import Home from "../Components/Home";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Club from '../Components/Club';
import International from '../Components/International';
import Laliga from '../Components/Laliga';
import Ligue1 from '../Components/Ligue1';
import PremierLeague from '../Components/PremierLeague';
import SerieA from '../Components/Serie-A';
import Bundesliga from '../Components/Bundesliga';
import Signup from '../Components/Signup';
const Routed = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/Science' element={<Club/>}/>
          <Route path='/Health' element={<International/>}/>
          <Route path='/India' element={<Laliga/>}/>
          <Route path='/Ligue1' element={<Ligue1/>}/>
          <Route path='/Technology' element={<PremierLeague/>}/>
          <Route path='/Sports' element={<SerieA/>}/>
          <Route path='/Entertainment' element={<Bundesliga/>}/>
          <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routed;
