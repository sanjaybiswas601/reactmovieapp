import React from 'react'
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Home from './components/Home'
import Singlemovie from './components/Singlemovie';
import './App.css'
import SaveMovie from './components/SaveMovie';

const App = () => {
 
  return (<>
  <BrowserRouter>
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<Singlemovie />} />
        {/* <Route path='/savemovie' element={<SaveMovie />} /> */}
      </Routes>
      </BrowserRouter>
  </>
  )
}

export default App
