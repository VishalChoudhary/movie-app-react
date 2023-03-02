import './App.css';
import React from 'react'
import Home from './components/Home';
import MoviePage from './components/MoviePage';
import Error from './components/Error';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<MoviePage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;