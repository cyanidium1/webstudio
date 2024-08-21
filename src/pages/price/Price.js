import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
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
import styles from './Price.module.css';
import PriceList from 'components/Card/Card';
import { List, ListItem } from 'components/List';
import { Link } from 'components/Link';

export const Price = () => {
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
          cards={currentTranslations.cards}
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>
                {currentTranslations.developmentHeading}
              </ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  {currentTranslations.listItems &&
                    currentTranslations.listItems.map((item, index) => (
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
