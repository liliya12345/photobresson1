import React from 'react';
import Header from "../pages/Header/Header";
import Hero from "../pages/Header/Hero";
import About from "../pages/Section/About";
import SectionAbout from "../pages/Section/SectionAbout";
import ImgToGallery from "../pages/Garelly/ImgToGallery";
import Footer from "../pages/Footer";


export default function Home(props) {
    return (
        <>
            <Header/>
            <Hero/>
            <SectionAbout/>
            <About/>
            <Footer/>
       </>
    );
}

