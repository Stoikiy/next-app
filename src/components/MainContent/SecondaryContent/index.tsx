import * as React from 'react';

import Book from '../../../../public/book.svg';
import MainContent from '../index';
import AppButton from '../../AppButton';

import {AppButtonSizes, AppButtonTypes, MainContentAlignTypes} from '../../../enums';
import styles from './index.module.scss';

interface ISecondaryContentProp {
    contentId: number;
}

const text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.`;

const SecondaryContent: React.FC<ISecondaryContentProp> = ({contentId}) => {
    if (contentId === 1) {
        return (
            <div>
                <Book />
                <MainContent headline={'Title Goes Here'} paragraph={text} align={MainContentAlignTypes.Left} additional />
            </div>
        )
    }

    return (
        <div className={styles.secondary_container}>
            <h1 className={styles.secondary_container__header}>$40</h1>
            <p className={styles.secondary_container__paragraph}>UI Design Kit</p>
            <p className={styles.secondary_container__paragraph}>See, One price. Simple.</p>
            <AppButton text={'Purchase Now'} size={AppButtonSizes.Huge} variant={AppButtonTypes.Secondary} />
        </div>
    )
}

export default SecondaryContent;