import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Adjust the import path as necessary
import './App.scss';
import BannerTop from './assets/js/banner_top';
import Nav from './assets/js/nav';
import Hero from './assets/js/hero';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <Hero />
        <BannerTop />
        <Nav />
      </div>
    </ThemeProvider>
  );
}

export default App;
