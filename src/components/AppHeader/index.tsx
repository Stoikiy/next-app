import * as React from 'react';

import {AppButtonSizes, AppButtonTypes} from '../../enums';

import Logo from '../Logo';
import AppButton from '../AppButton';
import NavBar from '../Navbar';

import styles from './index.module.scss';

const AppHeader: React.FC = () => {
    return (
            <header className={styles.header_container}>
                <div className={styles.header_container__content}>
                    <NavBar />
                </div>
                <div className={styles.header_container__content}>
                    <Logo/>
                </div>
                <div className={styles.header_container__content}>
                    <AppButton variant={AppButtonTypes.Secondary} size={AppButtonSizes.Medium} text='Buy Now' />
                </div>
            </header>
    )
}

export default AppHeader;