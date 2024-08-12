import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Adjust the import path as necessary
import './App.scss';
import BannerTop from './assets/js/banner_top';
import Nav from './assets/js/nav';
import Hero from './assets/js/hero';
import HowItWorks from './assets/js/how-it-works';
import GreenBanner from './assets/js/green_banner';
import LastSection from './assets/js/last_section';
import Footer from './assets/js/footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Hero />
        <BannerTop />
        <Nav />
        <HowItWorks />
        <GreenBanner />
        <LastSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
