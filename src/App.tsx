import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowRes from './Components/ShowRes';
import axios from 'axios';
import Loading from './Components/Loading';
import Main from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import PagenotFound from './Components/PagenotFound';
import LockerAmbin from './Components/Services/LockerAmbin';
import NavBar from './Components/NavBar';
import AccDB from './Components/Services/AccDB';



function App() {

  return (
    <div className="App" dir='rtl'>

      <Router>
        <NavBar />
        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/id/:mainId' element={<ShowRes />} />
          {/* <Route path='/55' element={<MyComponent />} /> */}
          <Route path='/55' element={<AccDB />} />
          {/* <Route path='/load' element={<Loading />} /> */}


          <Route path='/123' element={<LockerAmbin />} />
          <Route path='*' element={<PagenotFound />} />
        </Routes>
      </Router>
    </div >

  );
}

export default App;
