/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS'S -----> */
import sectionHabilidades from '../Styles/Page/Partials/sectionHabilidades.module.css';
import BalonTittle from '../Styles/Components/BalloonTittlePages.module.css';

/* <-----  ASSETS - ICONS -----> */
import IconHTML from '../Assets/Icons/Icons Skills/HTML.svg';
import IconCSS from '../Assets/Icons/Icons Skills/CSS.svg';
import IconJS from '../Assets/Icons/Icons Skills/JavaScript.svg';
import IconFigma from '../Assets/Icons/Icons Skills/Figma.svg';
import IconMySQL from '../Assets/Icons/Icons Skills/MySql.svg';
import IconReact from '../Assets/Icons/Icons Skills/ReactJS.svg';
import IconCSharp from '../Assets/Icons/Icons Skills/CSharp.svg';
import IconC from '../Assets/Icons/Icons Skills/C.svg';

/* <---- AOS ANIMATIONS ----> */
import AOS from 'aos';
import 'aos/dist/aos.css';

function Habilidades() {

  /* Chama a animação com aos */
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      {/* Habilidades */}
      <section className={sectionHabilidades.Habilidades} id='habilidades' >
        <svg width="1422" height="1016" viewBox="0 0 1422 1016" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M204.294 2.13385e-05V1113M1422 100.888H3.97034e-05M1422 192.009H3.97034e-05" stroke="url(#paint0_radial_1380_201)" stroke-opacity="0.25" stroke-width="3" />
          <defs>
            <radialGradient id="paint0_radial_1380_201" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(744.18 750.597) rotate(-109.963) scale(869.144 743.877)">
              <stop stop-color="#F0EDE6" />
              <stop offset="0.936311" stop-color="#F0EDE6" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        {/* Nome da section */}
        <h6 className={BalonTittle.TittlePage}>
          Habilidades
        </h6>
        {/* Titulo e descrição da section */}
        <div className={sectionHabilidades.TextContainer} data-aos="fade-right">
          <h1>Conheça um pouco as <span>minhas habilidades.</span></h1>
          <div className={sectionHabilidades.Description}>
            <p>Possuo habilidades em diversas tecnologias de desenvolvimento web, incluindo HTML5, CSS3 e JavaScript, além de frameworks como React.js, React Native e Node.js. Também tenho experiência na plataforma Figma para design e prototipagem.</p>
            <p>Sou entusiasta de Front-End e, embora minha experiência esteja focada principalmente nesta área, possuo conhecimentos básicos em MySQL, Linguagem C e C#.</p>
          </div>
        </div>
        {/* Minhas habilidades */}
        <section className={sectionHabilidades.ContainerSkills} data-aos="fade-up">
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconHTML} />
            </div>
            <h2>HTML5</h2>
          </div>
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconCSS} />
            </div>
            <h2>CSS3</h2>
          </div>
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconJS} />
            </div>
            <h2>JavaScript</h2>
          </div>
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconFigma} />
            </div>
            <h2>Figma</h2>
          </div>
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconMySQL} />
            </div>
            <h2>MySQL</h2>
          </div>
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconReact} />
            </div>
            <h2>ReactJS / Native</h2>
          </div>
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconCSharp} />
            </div>
            <h2>C#</h2>
          </div>
          <div className={sectionHabilidades.Skill}>
            <div className={sectionHabilidades.IconSkill}>
              <img src={IconC} />
            </div>
            <h2>Linguagem C</h2>
          </div>
        </section>
      </section>
    </>
  );
}

export default Habilidades;
