import * as React from 'react';
import classNames from 'classnames';

import {MainComponentProps} from '../../types';
import {MainContentAlignTypes} from '../../enums';

import styles from './index.module.scss';

export interface IMainContentProp {
    align: MainContentAlignTypes;
    headline: string;
    paragraph: string;

    blockId?: number;
    additional?: boolean
}

type MainContentType = MainComponentProps & IMainContentProp;

const MainContent: React.FC<MainContentType> = ({
        children,
        headline,
        paragraph,
        align,
        blockId,
        additional
    }) => {
    const contentStyles = classNames(styles.content_container, {
        [styles.content_container__align_left]: align === MainContentAlignTypes.Left,
        [styles.content_container__align_right]: align === MainContentAlignTypes.Right,
        [styles.content_container__align_center]: align === MainContentAlignTypes.Center
    });

    const headlineStyles = classNames(styles.text_container_headline, {
        [styles.text_container_headline__main]: blockId === 1,
        [styles.text_container_headline__secondary]: blockId !== 1,
        [styles.text_container_headline__additional]: additional,
    });

    const paragraphStyles = classNames(styles.text_container_paragraph, {
        [styles.text_container_paragraph__mid]: blockId !== 1,
        [styles.text_container_paragraph__huge]: blockId === 1,
        [styles.paragraph__small]: additional,
    });

    return (
        <article className={contentStyles}>
            <h1 className={headlineStyles}>
                {headline}
            </h1>
            <p className={paragraphStyles}>
                {paragraph}
            </p>
            {children}
        </article>
    )
}

export default MainContent;