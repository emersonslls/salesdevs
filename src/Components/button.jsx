/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS -----> */
import buttonScroll from '../Styles/Components/Button.module.css';

/* <-----  ASSETS - ICON -----> */
import ScrollIcon from '../Assets/VectorScroll.svg';

function Button() {
  const [show, setShow] = useState(false);

  {/* Exibe o botão após o usuário rolar a página 800px */ }
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY >= 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button  onClick={() => scrollToSection('home')} className={`${buttonScroll.Btn} ${show ? buttonScroll.show : ''}`}>
      <span className={buttonScroll.Pulse}></span>
      <img src={ScrollIcon} className={buttonScroll.Icon} alt="Scroll Icon" />
    </button>
  );
}

export default Button;
