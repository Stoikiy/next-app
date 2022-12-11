import React from 'react';
import classNames from 'classnames';

import FirstSVG from '../public/image_1.svg';
import SecondSVG from '../public/image_2.svg';
import ThirdSVG from '../public/image_3.svg';
import AppButton from '../src/components/AppButton';
import MainContent from '../src/components/MainContent';
import SecondaryContent from '../src/components/MainContent/SecondaryContent';

import {MainContentSection, AppButtonTypes, AppButtonSizes} from '../src/enums';

/** because of limited time I've just add Mock data instead of Node Api with parsers etc... */
import mockData from '../api/mock';
import styles from './index.module.scss';

const getImage = (id: number): React.ReactElement => {
    switch (id) {
      case 1:
        return <FirstSVG />
      case 2:
        return <SecondSVG />
      case 3:
        return <ThirdSVG />
      default:
        return <React.Fragment />;
    }
};

const getComponent = (id: number): React.ReactNode => {
  switch (id) {
    case 1:
      return (
          <div className={styles.other}>
            <AppButton variant={AppButtonTypes.Secondary} text={'Purchase UI Kit'} size={AppButtonSizes.Huge} />
            <AppButton variant={AppButtonTypes.Main} text={'Learn More'} size={AppButtonSizes.Huge} />
          </div>
    );
    case 2:
      return (
          <div className={styles.other}>
              <SecondaryContent contentId={1} />
              <SecondaryContent contentId={1} />
          </div>
      );
    case 4:
      return (
          <div>
              <SecondaryContent contentId={2} />
          </div>
      );
    default:
      return <React.Fragment />;
  }
}

const Home: React.FC = () => {
  return (
    <React.Fragment>
        {mockData.map(data => {
          const sectionStyles = classNames(styles.section, {
            [styles.section__first]: data.id === MainContentSection.First,
            [styles.section__second]: data.id === MainContentSection.Second,
            [styles.section__third]: data.id === MainContentSection.Third,
            [styles.section__four]: data.id === MainContentSection.Four,
          });

          const imagesStyles = classNames(styles.image_container, {
            [styles.image_container__first]: data.id === MainContentSection.First,
            [styles.image_container__second]: data.id === MainContentSection.Second,
            [styles.image_container__third]: data.id === MainContentSection.Third,
          });

          return (
                <section className={sectionStyles} key={data.id}>
                    <MainContent
                        headline={data.headline}
                        paragraph={data.paragraph}
                        align={data.align}
                        blockId={data.id}
                    >
                      {data.additionalContent ? getComponent(data.id) : null}
                    </MainContent>
                  <picture className={imagesStyles} >
                    {getImage(data.id)}
                  </picture>
                </section>
            )
        })}
    </React.Fragment>
  )
}

export default Home;
