/* <--- FUNCTIONS REACT ---> */
import React, { useRef, useState, useEffect } from "react";

/* <--- CSS ---> */
import styles from '../Styles/Components/Header.module.css';

/* <--- ASSETS - LOGO ---> */
import Logo from '../Assets/New Logo.svg';
import Icon from '../Assets/icon.svg';

/* <--- ASSETS - MENU ---> */
import Menu from '../Assets/Icons/Menu.svg';
import Close from '../Assets/Icons/Close.svg';

/* <--- ASSETS - ICONS REDES ---> */
import LinkedIn from '../Assets/Icons/Icons Redes - Header/LinkedIn.svg';
import Instagram from '../Assets/Icons/Icons Redes - Header/Instagram.svg';
import Github from '../Assets/Icons/Icons Redes - Header/GitHub.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const menuRef = useRef(null);
    const wrapperRef = useRef(null); // Novo ref para botão + menu

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    // Efeito para mudar o fundo do header ao rolar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Efeito para fechar o menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={`${styles.Header} ${scrolled ? styles.HeaderSolid : ''}`}>
            {/* Logo Desktop */}
            <img
                src={Logo}
                alt="Logo"
                className={styles.Logo}
            />
            {/* Icon Mobile */}
            <img
                src={Icon}
                alt="Icon"
                className={styles.Icon}
            />

            {/* Wrapper que engloba menu e botão */}
            <div ref={wrapperRef}>
                <nav
                    ref={menuRef}
                    className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
                >
                    <ul>
                        <li onClick={() => scrollToSection('projetos')}>Projetos</li>
                        <li onClick={() => scrollToSection('sobre')}>Sobre</li>
                        <li onClick={() => scrollToSection('habilidades')}>Habilidades</li>
                    </ul>

                    <div className={styles.Redes}>
                        <h1>Links Sociais</h1>
                        <div className={styles.RedesIcon}>
                            <a href="https://www.linkedin.com/in/emersonssales/" target="_blank" rel="noreferrer">
                                <div className={styles.IconRedes}>
                                    <img src={LinkedIn} alt="LinkedIn" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/sxlesz_" target="_blank" rel="noreferrer">
                                <div className={styles.IconRedes}>
                                    <img src={Instagram} alt="Instagram" />
                                </div>
                            </a>
                            <a href="https://github.com/emersonslls" target="_blank" rel="noreferrer">
                                <div className={styles.IconRedes}>
                                    <img src={Github} alt="GitHub" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <button className={styles.BtnContatos} onClick={() => scrollToSection('contatos')}>
                        Contatos
                    </button>
                </nav>
                <button
                    className={styles.hamburger}
                    onClick={(e) => {
                        e.stopPropagation(); // Impede que clique no botão acione o clique fora
                        toggleMenu();
                    }}
                >
                    {isMenuOpen ? (
                        <img src={Close} className={styles.closeIcon} alt="Fechar" />
                    ) : (
                        <img src={Menu} className={styles.menuIcon} alt="Menu" />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
