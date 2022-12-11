import * as React from 'react';
import {useState, useEffect} from 'react';

import {AppButtonSizes, AppButtonTypes} from '../../enums';

import Logo from '../Logo';
import AppButton from '../AppButton';
import Navbar from '../Navbar';
import Facebook from '../../../public/facebook.svg';
import Twitter from '../../../public/twitter.svg';
import Linkedin from '../../../public/linkedin.svg';
import Youtube from '../../../public/youtube.svg';
import Instagram from '../../../public/Instagram.svg';

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
                <div className={styles.footer_sections__content}>
                    <Logo/>
                </div>
                <div className={styles.footer_sections__content}>
                    <AppButton variant={AppButtonTypes.Secondary} size={AppButtonSizes.Small} text={'Purchase now'}/>
                </div>
            </section>
            <section className={styles.footer_sections}>
                <div className={styles.footer_sections__content}>
                    <Navbar />
                </div>
                <div className={styles.footer_sections__content}>
                    <Facebook className={styles.social_media} />
                    <Linkedin className={styles.social_media} />
                    <Twitter className={styles.social_media} />
                    <Youtube className={styles.social_media} />
                    <Instagram className={styles.social_media} />
                </div>
            </section>
        </footer>
    )
}

export default AppFooter;