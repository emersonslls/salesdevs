/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS'S -----> */
import sectionProjeto from "../Styles/Page/Partials/sectionProjeto.module.css";
import BalonTittle from "../Styles/Components/BalloonTittlePages.module.css";

/* <-----  COMPONENTS -----> */
import ProjectCard from "../Components/ProjectCard";

/* <-----  ASSETS - ICONS TECHS-----> */
import FigmaIcon from "../Assets/Icons/Icons Techs/Figma.svg";
import ReactIcon from "../Assets/Icons/Icons Techs/ReactJS.svg";

/* <---- AOS ANIMATIONS ----> */
import AOS from "aos";
import "aos/dist/aos.css";

function Projeto() {
  /* Chama a animação com aos */
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  /* Declara os cards dos meus projetos */

  const projects = [
    {
      title: "My Service",
      description:
        "Este é um projeto desenvolvido como parte do meu TCC na ETEC, com foco em aprendizado prático em Front-End e UI/UX. Feedbacks e sugestões são muito bem-vindos!",
      techIcons: [FigmaIcon, ReactIcon],
      linkLabel: "Veja o site no ar",
      link: "https://app-myservice.vercel.app",
    },
    {
      title: "Coca-Cola",
      description:
        "Projeto focado no aprimoramento prático em Front-End e UI/UX, aplicando usabilidade, design responsivo e boas práticas. Feedbacks e sugestões são bem-vindos!",
      techIcons: [FigmaIcon, ReactIcon],
      linkLabel: "Veja o Repositório",
      link: "https://meusite.com",
    },
    {
      title: "AlphaDev’s",
      description:
        "Projeto desenvolvido em grupo para apresentar uma empresa fictícia, com foco em aplicar nossas habilidades e conhecimentos adquiridos. Feedbacks são bem-vindos!",
      techIcons: [FigmaIcon, ReactIcon],
      linkLabel: "Veja o site no ar",
      link: "https://alphadevs.vercel.app",
    },
    {
      title: "Links Page",
      description:
        "Projeto desenvolvido para criar uma página de links, focada em organização, praticidade e melhor experiência do usuário. Feedbacks e sugestões são sempre bem-vindos!",
      techIcons: [FigmaIcon, ReactIcon],
      linkLabel: "Veja o site no ar",
      link: "https://salesdevlinks.vercel.app",
    },
  ];

  return (
    <>
      {/* Projetos */}
      <section className={sectionProjeto.Projeto} id="projetos">
        <svg
          width="1474"
          height="1466"
          viewBox="0 0 1474 1466"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1284.5 1500V0M0 1390.39H1500M0 1291.39H1500"
            stroke="url(#paint0_radial_1377_146)"
            stroke-opacity="0.25"
            stroke-width="3"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1377_146"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(715 684.5) rotate(70.5735) scale(941.136 975.391)"
            >
              <stop stop-color="#F0EDE6" />
              <stop offset="1" stop-color="#F0EDE6" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        {/* Nome da section */}
        <h6 className={BalonTittle.TittlePage}>Projetos</h6>
        {/* Titulo da section */}
        <div className={sectionProjeto.TextContainer} data-aos="fade-down">
          <h1 data-aos="fade-right">
            Boas-Vindas ao <span>meu portfólio!</span>
          </h1>
          <h2 data-aos="fade-left">
            Sou desenvolvedor Front-End júnior focado em UI/UX. Confira meus
            projetos e entre em contato para colaborações ou feedbacks!
          </h2>
        </div>
        {/* Grid dos projetos */}
        <section className={sectionProjeto.ProjectGrid}>
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </section>
      </section>
    </>
  );
}

export default Projeto;
