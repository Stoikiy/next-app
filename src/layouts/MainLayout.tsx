import React from "react";
import Head from 'next/head';
import classNames from 'classnames';
import {MainComponentProps} from '../types';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

import style from './index.module.scss';


const MainLayout: React.FC<MainComponentProps> = ({children}) => {

    // const headerStyles = classNames([style.header_container, {
    //     [style.blue_header]: is404Error,
    // }]);

    return (
        <React.Fragment>
            <Head>
                <title>Landie</title>
                <meta charSet="utf-8" />
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
            </Head>
            <AppHeader/>
            <main>
                {children}
            </main>
            <AppFooter/>
        </React.Fragment>
    );
}


export default MainLayout;
