/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  COMPONENTS -----> */
import Button from '../Components/button';
import Header from '../Components/Header';

/* <-----  CSS -----> */
import sectionHome from '../Styles/Page/Partials/sectionHome.module.css';

/* <---- AOS ANIMATIONS ----> */
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  /* Chama a animação com aos */
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header */}
      <Header />
      {/* Button Scroll */}
      <Button />
      {/* Home */}
      <section className={sectionHome.Home} id='home' >
        <p data-aos="fade-down">Web Developer Junior</p>
        <div className={sectionHome.Titulo} data-aos="fade-right">
          <h1>Transformo <span>ideias</span> em <span>interfaces modernas</span> e <span>responsivas.</span></h1>
          <h2>Olá! Sou Emerson Sales, Desenvolvedor front-end em constante evolução, desenvolvo interfaces intuitivas, responsivas e com foco na melhor experiência do usuário.</h2>
        </div>
        <button onClick={() => scrollToSection('sobre')} className={sectionHome.Btn} data-aos="fade-right">Saiba mais sobre mim</button>
      </section>
    </>
  );
}

export default Home;
