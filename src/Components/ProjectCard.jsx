/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <-----  CSS -----> */
import styles from '../Styles/Components/ProjectCard.module.css';

/* <-----  ASSETS - ICON -----> */
import IconArrow from '../Assets/Icons/Arrow.svg'

/* <---- AOS ANIMATIONS ----> */
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCard({ title, description, techIcons, linkLabel, link }) {

    /* Chama a animação com aos */
    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    }, []);


    return (
        <div className={styles.CardWrapper} data-aos="fade-right">
            {/* Card do projeto */}
            <div className={styles.Card} >
                <div className={styles.Detail} />

                {/* Textos */}
                <h1 className={styles.NameProject}>{title}</h1>
                <p className={styles.Description}>{description}</p>

                {/* Tecnologias usadas */}
                <div className={styles.Techs}>
                    <h2>Tecnologias utilizadas:</h2>
                    <div className={styles.IconsTechs}>
                        {techIcons.map((icon, index) => (
                            <img key={index} src={icon} alt="tecnologia" />
                        ))}
                    </div>
                </div>
                {/* Button para acessar o projeto */}
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className={styles.Btn}>
                        {linkLabel}
                        <div className={styles.IconArrow}>
                            <img src={IconArrow} alt="arrow" />
                        </div>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
