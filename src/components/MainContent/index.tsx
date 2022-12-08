import * as React from 'react';
import classNames from 'classnames';
import CSS from 'csstype';

import {MainComponentProps} from '../../types';
import {MainContentAlignTypes} from '../../enums';

import styles from './index.module.scss';

export interface IMainContentProp {
    align: MainContentAlignTypes;
    headline: string;
    paragraph: string;

    blockIndex?: number;
    additionalContent?: boolean;
}

type MainContentType = MainComponentProps & IMainContentProp;

const MainContent: React.FC<MainContentType> = ({children, headline, paragraph, align, blockIndex}) => {
    const contentStyles = classNames(styles.content_container, {
        [styles.content_container__align_left]: align === MainContentAlignTypes.Left,
        [styles.content_container__align_right]: align === MainContentAlignTypes.Right,
        [styles.content_container__align_center]: align === MainContentAlignTypes.Center
    });

    const headlineStyles = classNames(styles.text_container, {
        [styles.text_container_headline__main]: blockIndex === 0,
        [styles.text_container_headline__secondary]: blockIndex !== 0
    });

    const paragraphStyles = classNames(styles.text_container, {
        // [styles.paragraph__small]: blockIndex === 0,
        [styles.text_container_paragraph__mid]: blockIndex !== 0,
        [styles.text_container_paragraph__huge]: blockIndex === 0
    });

    return (
        <article className={contentStyles}>
            <span className={headlineStyles}>
                {headline}
            </span>
            <p className={paragraphStyles}>
                {paragraph}
            </p>
            {children}
        </article>
    )
}

export default MainContent;