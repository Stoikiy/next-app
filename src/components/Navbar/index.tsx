import * as React from 'react';
import Link from 'next/link'

import styles from './index.module.scss';

const NavBar: React.FC = () => (
    <React.Fragment>
        <nav className={styles.app_nav}>

            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/" className={styles.link}>About</Link>
            <Link href="/" className={styles.link}>Contact</Link>
        </nav>
    </React.Fragment>
);

export default NavBar;