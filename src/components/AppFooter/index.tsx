import * as React from 'react';
import {useState, useEffect } from 'react';

import {AppButtonSizes, AppButtonTypes} from '../../enums';

import Logo from '../Logo';
import AppButton from '../AppButton';
import Navbar from '../Navbar';

import styles from './index.module.scss';

const AppFooter: React.FC = () => {
    const [currentDate, getDate] = useState<number>(0);

    useEffect(() => {
        const date = new Date();
        getDate(() => date.getFullYear());
    }, []);

    //TODO add social media SVG
    return (
        <footer className={styles.footer_container}>
            <section className={styles.footer_sections}>
                <article className={styles.footer_sections__content}>
                    <span>&copy;{currentDate} Yourcompany</span>
                </article>
                <article className={styles.footer_sections__content}>
                    <Logo/>
                </article>
                <article className={styles.footer_sections__content}>
                    <AppButton variant={AppButtonTypes.Secondary} size={AppButtonSizes.Small} text={'Purchase now'}/>
                </article>
            </section>
            <section className={styles.footer_sections}>
                <article className={styles.footer_sections__content}>
                    <Navbar />
                </article>
                <article className={styles.footer_sections__content}>
                    social media
                </article>
            </section>
        </footer>
    )
}

export default AppFooter;