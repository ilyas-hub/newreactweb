import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import HowitWorks from './HowitWorks';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';


const Home= () => {
  return( <>
    <Navbar />
    <Header />
    <HowitWorks />
    <Aboutus />
    <Services/>
    <Contact />
    <Footer />
  </>
  );
};

export default Home;