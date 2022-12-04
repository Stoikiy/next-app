import * as React from 'react';

import {AppButtonSizes, AppButtonTypes} from '../../enums';

import Logo from '../Logo';
import AppButton from '../AppButton';

const AppHeader: React.FC = () => {
    return (
            <header>
                <Logo/>
                <br/>
                <AppButton variant={AppButtonTypes.Main} size={AppButtonSizes.Small} text='Hello There' />
                <br/>
                <br/>
                <AppButton variant={AppButtonTypes.Secondary} size={AppButtonSizes.Medium} text='Hello There' />
                <br/>
                <br/>
                <AppButton variant={AppButtonTypes.Secondary} size={AppButtonSizes.Huge} text='Hello There' />
            </header>
    )
}

export default AppHeader;