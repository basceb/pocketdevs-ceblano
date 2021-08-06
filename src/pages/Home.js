import React from 'react';
import '../App.css';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Cards from './Cards';

// Landing Page
function Home(){
    return(
    <>
        <HeroSection/>
        <Cards />
        <Footer />
    </>
    );
}

export default Home;