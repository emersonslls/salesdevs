import React, { useState, useEffect, useRef } from 'react';

/* <--- CSS ---> */
import styles from '../Styles/Components/Footer.module.css';

/* <--- ASSETS ---> */
import Icon from '../Assets/icon.svg';

function Footer() {

    return (
        <footer className={styles.Footer}>
            <img src={Icon} className={styles.IconWorld} />
            <p className={styles.Direitos}>© 2025 Emerson Sales. Todos os direitos reservados. </p>
        </footer>
    );
}

export default Footer;