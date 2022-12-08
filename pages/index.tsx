import React from 'react';
import classNames from 'classnames';
import CSS from 'csstype'; // TODO remove or use?

import FirstSVG from '../public/image_1.svg';
import SecondSVG from '../public/image_2.svg';
import ThirdSVG from '../public/image_3.svg';
import AppButton from '../src/components/AppButton';

import MainContent from '../src/components/MainContent';

import {MainContentAlignTypes, AppButtonTypes, AppButtonSizes} from '../src/enums';
import mockData from '../api/mock';
import styles from './index.module.scss';

enum AdditionalContent {
  Component,
  Image
}

const getAdditionalContent = (type: AdditionalContent, number: number): React.ReactElement | undefined => {
  if (type === AdditionalContent.Image) {
    switch (number) {
      case 1:
        return <FirstSVG />
      case 2:
        return <SecondSVG />
      case 3:
        return <ThirdSVG />
      default:
        return <React.Fragment />;
    }
  } else if (type === AdditionalContent.Component) { // TODO add different components
    return (
        <>
          <AppButton variant={AppButtonTypes.Main} text={'hello'} size={AppButtonSizes.Huge} />
          <AppButton variant={AppButtonTypes.Secondary} text={'hello'} size={AppButtonSizes.Huge} />
      </>
    )
  }
};

const Home: React.FC = () => {
  return (
    <React.Fragment>
        {mockData.map((data, index) => {
          const sectionStyles = classNames(styles.section, {
            [styles.section__first]: data.align === MainContentAlignTypes.Left && index === 0,
            [styles.section__second]: data.align === MainContentAlignTypes.Left && index === 1,
            [styles.section__third]: data.align === MainContentAlignTypes.Right && index === 2,
            [styles.section__four]:  data.align === MainContentAlignTypes.Center && index === 3,
          });

          const imagesStyles = classNames(styles.image_container, {
            [styles.image_container__first]: index === 0,
            [styles.image_container__second]: index === 1,
            [styles.image_container__third]: index === 2,
          });

          return (
                <section className={sectionStyles} key={index + '-section'}>
                    <MainContent
                        headline={data.headline}
                        paragraph={data.paragraph}
                        align={data.align}
                        blockIndex={index}
                        key={index}
                    >
                      {data.additionalContent ? getAdditionalContent(AdditionalContent.Component, index + 1) : null}
                    </MainContent>
                  <picture className={imagesStyles} >
                    {getAdditionalContent(AdditionalContent.Image, index + 1)}
                  </picture>
                </section>
            )
        })}
    </React.Fragment>
  )
}

export default Home;
