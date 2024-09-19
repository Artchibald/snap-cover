
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Adjust the import path as necessary
import './App.scss';
import BannerTop from './assets/js/banner_top';
import Nav from './assets/js/nav';
import Hero from './assets/js/hero';
import ModalPolicy from './assets/js/modal_policy';
import HowItWorks from './assets/js/how-it-works';
import GreenBanner from './assets/js/green_banner';
import LastSection from './assets/js/last_section';
import Footer from './assets/js/footer';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BannerTop />
        <Nav />
        <Hero />
        <ModalPolicy open={openModal} onClose={handleCloseModal} />
        <HowItWorks />
        <GreenBanner />
        <LastSection />
        <Footer onOpenModal={handleOpenModal} />
      </div>
    </ThemeProvider>
  );
}

export default App;



