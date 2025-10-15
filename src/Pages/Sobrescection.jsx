/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS'S -----> */
import sectionSobre from '../Styles/Page/Partials/sectionSobre.module.css';
import BalonTittle from '../Styles/Components/BalloonTittlePages.module.css';

/* <-----  ASSETS -----> */
import IconCV from '../Assets/Icons/CV.svg';
import MeuCV from '../Assets/CV/EmersonSales_CV.pdf';

/* <---- AOS ANIMATIONS ----> */
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sobre() {

    /* Chama a função e mostra o meu curriculo em outra guia  */
    const abrirCurriculo = () => {
        window.open(MeuCV, '_blank');
    };

    /* Chama a animação com aos */
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);

    return (
        <>
            {/* Sobre */}
            <section className={sectionSobre.Sobre} id='sobre' >
                <svg width="1422" height="1080" viewBox="0 0 1422 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M204.294 2.13385e-05V1113M1422 100.888H3.97034e-05M1422 192.009H3.97034e-05" stroke="url(#paint0_radial_1380_158)" stroke-opacity="0.25" stroke-width="3" />
                    <defs>
                        <radialGradient id="paint0_radial_1380_158" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(744.18 750.597) rotate(-109.963) scale(869.144 743.877)">
                            <stop stop-color="#050506" />
                            <stop offset="0.936311" stop-color="#050506" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                {/* Nome da section */}
                <h6 className={BalonTittle.TittlePageOrage}>
                    Sobre
                </h6>
                {/* Titulo da section */}
                <h1 className={sectionSobre.Tittle} data-aos="fade-right">
                    Saiba mais sobre <span>mim.</span>
                </h1>
                {/* Resumo sobre mim */}
                <h5 data-aos="fade-right">Olá, sou Emerson Sales, tenho 20 anos e sou estudante de Análise e Desenvolvimento de Sistemas na UNIP.</h5>
                {/* Button paa acessar meu curriculo */}
                <button onClick={abrirCurriculo} className={sectionSobre.Button} data-aos="fade-right">Acesse meu CV <div className={sectionSobre.IconCV}><img src={IconCV} /></div></button>
                <div className={sectionSobre.Detail1}>
                    <svg width="340" height="138" viewBox="0 0 340 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 22.2646C3.33333 43.2646 78.7 84.1999 131.5 58.9999C197.5 27.4999 109 -29.7352 131.5 22.2648C154 74.2648 345.17 2.78542 338 137.5" stroke="url(#paint0_linear_1380_192)" stroke-width="2" stroke-dasharray="5 5" />
                        <defs>
                            <linearGradient id="paint0_linear_1380_192" x1="298.5" y1="0.999994" x2="69" y2="290" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F0EDE6" />
                                <stop offset="1" stop-color="#5F5F5F" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                {/* Mais resumo sobre mim */}
                <h3 data-aos="fade-left">Sou ex-aluno da ETEC, onde me formei em Desenvolvimento de Sistemas. Foi lá que me identifiquei profundamente com as áreas de Front-End, Web Design e UI/UX.</h3>
                <div className={sectionSobre.Detail2} >
                    <svg width="274" height="110" viewBox="0 0 274 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 96.0284C17 79 105.083 80.0284 83.8825 96.0284C57.3825 116.028 123.001 108.528 139.001 96.0284C155.001 83.5284 186.262 84.5783 207.001 96.0284C312.001 153.999 261.5 -2.50033 259.5 0.999821" stroke="url(#paint0_linear_1380_194)" stroke-dasharray="5 5" />
                        <defs>
                            <linearGradient id="paint0_linear_1380_194" x1="176.437" y1="76.8095" x2="36.1245" y2="168.586" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5F5F5F" />
                                <stop offset="1" stop-color="#F0EDE6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                {/* Mais resumo sobre mim */}
                <h4 data-aos="fade-right">Estou muito entusiasmado para ingressar em algumas dessas áreas e também pronto para contribuir com minha dedicação ao aprendizado, ajudando a atingir os objetivos da equipe ou da empresa.</h4>
            </section>
        </>
    );
}

export default Sobre;
