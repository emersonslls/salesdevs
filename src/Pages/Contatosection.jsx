/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS'S -----> */
import sectionContatos from '../Styles/Page/Partials/sectionContatos.module.css';
import BalonTittle from '../Styles/Components/BalloonTittlePages.module.css';

/* <-----  ASSETS - ICONS -----> */
import IconArrow from '../Assets/Icons/Arrow.svg';
/* <-----  ICONS CONTATOS -----> */
import LinkedIn from '../Assets/Icons/Icons Contatos/Linkedin.svg';
import Email from '../Assets/Icons/Icons Contatos/Emaill.svg';
import GitHub from '../Assets/Icons/Icons Contatos/GitHub.svg';

/* <---- AOS ANIMATIONS ----> */
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contatos() {

    /* Chama a animação com aos */
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);

    const meuEmail = 'emersonsantossales245@gmail.com'; /* Declara a função e chama o meu e-mail */

    return (
        <>
            {/* Contatos */}
            <section className={sectionContatos.Contatos} id='contatos' >
                <svg width="1422" height="920" viewBox="0 0 1422 920" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1217.71 995L1217.71 -118M0 894.112L1422 894.112M0 802.991L1422 802.991" stroke="url(#paint0_radial_1385_40)" stroke-opacity="0.25" stroke-width="3" />
                    <defs>
                        <radialGradient id="paint0_radial_1385_40" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(677.82 244.403) rotate(70.0367) scale(869.144 743.877)">
                            <stop stop-color="#F0EDE6" />
                            <stop offset="0.936311" stop-color="#F0EDE6" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                {/* Nome da section */}
                <h6 className={BalonTittle.TittlePage}>
                    Contatos
                </h6>
                {/* Titulo da section */}
                <div className={sectionContatos.TextContainer} data-aos="fade-right">
                    <h1>Fico à disposição para <span>conversarmos.</span></h1>
                    <div className={sectionContatos.Description}>
                        <h2>Caso tenha interesse em contratar meus serviços ou compartilhar sugestões, sinta-se à vontade para entrar em contato por mensagem ou e-mail.</h2>
                        <p>Também estou disponível no LinkedIn e GitHub, onde compartilho meus projetos e experiências. Será um prazer trocar ideias e receber seu feedback.</p>
                    </div>
                </div>
                {/* Meus contatos */}
                <section className={sectionContatos.ContainerContatos} data-aos="fade-up">
                    <a href="https://www.linkedin.com/in/emersonssales/" target="_blank" rel="noopener noreferrer">
                        <div className={sectionContatos.CardContainer}>
                            <div className={sectionContatos.CardContact}>
                                <div className={sectionContatos.Icon}>
                                    <img src={LinkedIn} />
                                </div>
                                <button className={sectionContatos.Btn}>
                                    <img src={IconArrow} alt="arrow" />
                                </button>
                                <p>Acesse meu perfil no LinkedIn para saber mais sobre minha trajetória e projetos.</p>
                            </div>
                        </div>
                    </a>
                    <a href={`mailto:${meuEmail}`} target="_blank" rel="noopener noreferrer">
                        <div className={sectionContatos.CardContainer}>
                            <div className={sectionContatos.CardContact}>
                                <div className={sectionContatos.Icon}>
                                    <img src={Email} />
                                </div>
                                <button className={sectionContatos.Btn}>
                                    <img src={IconArrow} alt="arrow" />
                                </button>
                                <p>Entre em contato diretamente por e-mail para dúvidas, propostas ou colaborações.</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/emersonslls" target="_blank" rel="noopener noreferrer">
                        <div className={sectionContatos.CardContainer}>
                            <div className={sectionContatos.CardContact}>
                                <div className={sectionContatos.Icon}>
                                    <img src={GitHub} />
                                </div>
                                <button className={sectionContatos.Btn}>
                                    <img src={IconArrow} alt="arrow" />
                                </button>
                                <p>Acompanhe meus repositórios e contribuições no GitHub.</p>
                            </div>
                        </div>
                    </a>
                </section>
            </section >
        </>
    );
}

export default Contatos;
