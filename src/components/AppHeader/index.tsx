import * as React from 'react';

import {AppButtonSizes, AppButtonTypes} from '../../enums';

import Logo from '../Logo';
import AppButton from '../AppButton';
import NavBar from '../Navbar';

import styles from './index.module.scss';

const AppHeader: React.FC = () => {
    return (
            <header className={styles.header_container}>
                <article className={styles.header_container__content}>
                    <NavBar />
                </article>
                <article className={styles.header_container__content}>
                    <Logo/>
                </article>
                <article className={styles.header_container__content}>
                    <AppButton variant={AppButtonTypes.Secondary} size={AppButtonSizes.Medium} text='Buy Now' />
                </article>
            </header>
    )
}

export default AppHeader;