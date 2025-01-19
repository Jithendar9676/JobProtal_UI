import { useState } from 'react'
// import './App.css'
import { createTheme, MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
function App() {
  const theme = createTheme({
    colors: {
    'mineShaft': [
 '#f6f6f6','#e7e7e7', '#d1d1d1', '#b0b0b0','#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f','#454545','#3d3d3d','#2d2d2d',
    ],
    'brightSun': [
    '#fefce8','#fff9c2','#fff087','#ffe043','#ffd129', '#efb303','#ce8900','#a46104','#884b0b', '#733e10','#431f05',
    ],
 
    }
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={  <HomePage />}/>
      </Routes>
      </BrowserRouter>
    
    </MantineProvider>
  )
}

export default App
