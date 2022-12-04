import * as React from 'react';
import classNames from 'classnames';

import {AppButtonSizes, AppButtonTypes} from '../../enums';
import styles from './index.module.scss';

interface IAppButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: AppButtonTypes;
    size: AppButtonSizes;
    text: string;
}

const AppButton: React.FC<IAppButtonProps> = ({text, ...props}) => {
    const buttonStyles = classNames(styles.app_button, {
        [styles.app_button__main]: props.variant === AppButtonTypes.Main,
        [styles.app_button__secondary]: props.variant === AppButtonTypes.Secondary,
        [styles.app_button_small]: props.size === AppButtonSizes.Small,
        [styles.app_button_medium]: props.size === AppButtonSizes.Medium,
        [styles.app_button_huge]: props.size === AppButtonSizes.Huge,
    });

    return <button className={buttonStyles} type='button' {...props}>{text}</button>;
}

export default AppButton;