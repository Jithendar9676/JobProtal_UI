import { useState } from 'react'
// import './App.css'
import { createTheme, MantineProvider } from '@mantine/core';
import HomePage from './Pages/HomePage';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindJobPage from './Pages/FindJobPage';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
function App() {
  const theme = createTheme({
    colors: {
    'mineShaft': [
 '#f6f6f6','#e7e7e7', '#d1d1d1', '#b0b0b0','#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f','#454545','#3d3d3d','#2d2d2d',
    ],
    'brightSun': [
    '#fefce8','#fff9c2','#fff087','#ffe043','#ffd129', '#efb303','#ce8900','#a46104','#884b0b', '#733e10','#431f05',
    ],
  
 
    },
  fontFamily:"poppies, sans serif"
  });

  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
       <Header/>
      <Routes>
      <Route path='/find-talent' element={<FindTalentPage/>}/>
        <Route path='/find-jobs' element={<FindJobPage/>}/>
        <Route path='/talent-profile' element={<TalentProfilePage/>}/>
        <Route path='*' element={  <HomePage />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
    </MantineProvider>
  )
}

export default App
