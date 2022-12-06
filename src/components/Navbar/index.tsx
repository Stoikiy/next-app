import * as React from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

const NavBar: React.FC = () => {
    return (
        <React.Fragment>
            <nav className={styles.app_nav}>
                <a href="/" className={styles.link}>Home</a>
                <a href="/" className={styles.link}>About</a>
                <a href="/" className={styles.link}>Contact</a>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;