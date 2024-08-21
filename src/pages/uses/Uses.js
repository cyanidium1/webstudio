import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment, useEffect, useState } from 'react';
import useStore from 'utils/zustand';
import translations from 'translations/uses.json';
import styles from './Uses.module.css';
import PriceList from 'components/Card/Card';
// import InteractiveCards from 'components/Card/Card';

export const Uses = () => {
  const { language } = useStore();
  const [currentTranslations, setCurrentTranslations] = useState(translations[language]);

  useEffect(() => {
    setCurrentTranslations(translations[language]);
  }, [language]);

  return (
    <Fragment>
      <Meta
        title={currentTranslations.title}
        description={currentTranslations.description}
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={currentTranslations.headerTitle}
          description={currentTranslations.headerDescription}
        />
        <PriceList
          ctaText={currentTranslations.ctaText}
          cards={[
            {
              title: 'Лендинг',
              price: 'от 400$',
              features: [
                '1-3 страницы',
                'дизайн, ночная тема',
                'версии для всех экранов',
                'анимация',
                'контактная форма с отправкой на почту или в мессенджер',
                'SEO оптимизация',
                'мультиязычность',
                'срок 5-7 дней',
              ],
            },
            {
              title: 'Корпоративный сайт',
              price: 'от 600$',
              features: [
                '5+ страниц',
                'дизайн, ночная тема',
                'версии для всех экранов',
                'анимация',
                'контактная форма с отправкой на почту или в мессенджер',
                'SEO оптимизация',
                'мультиязычность',
                'админ панель для списка услуг и новостей',
                'срок 7-10 дней',
              ],
            },
            {
              title: 'Интернет-магазин',
              price: 'от 1000$',
              features: [
                '5+ страниц',
                'автоматически создаваемые индивидуальные страницы для товаров',
                'версии для всех экранов',
                'анимация',
                'контактная форма с отправкой на почту или в мессенджер',
                'подключение платежных систем',
                'мультиязычность',
                'админ панель для списка услуг и новостей',
                'срок 14-30 дней',
              ],
            },
            {
              title: 'Индивидуальный проект',
              price: '1000$',
              features: [
                'дизайн',
                'адаптивная верстка',
                'анимация',
                'контактная форма',
                'SEO оптимизация',
                'срок 14-21 день',
              ],
            },
          ]}
        />

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>
                {currentTranslations.developmentHeading}
              </ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  {currentTranslations.listItems.map((item, index) => (
                    <ListItem key={index}>
                      {item.split(' ').map((word, i) => (
                        <span key={i}>
                          {word.includes('http') ? (
                            <Link href={word}>{word.replace('https://', '')}</Link>
                          ) : (
                            word + ' '
                          )}
                        </span>
                      ))}
                    </ListItem>
                  ))}
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
