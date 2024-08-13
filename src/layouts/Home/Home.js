import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sairamBusTexture from 'assets/sairambuss-login.jpg';
import sairamBusTextureLarge from 'assets/sairambuss-login-large.jpg';
import sairamBusTexture2 from 'assets/sairambuss-list.jpg';
import sairamBusTexture2Large from 'assets/sairambuss-list-large.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import synTexture from 'assets/synhome.jpg';
import synTextureLarge from 'assets/synhome-large.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Programmer', 'Gamer', 'Designer'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer"
        description="Portfolio of Pughalesh — a Full Stack Developer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="MadrasDa Website"
        description="A Website to sell official merch of certain production house and Print On Demand design Ecommerce site."
        buttonText="View project"
        buttonLink="https://github.com/PughalBot/madrasda"
        model={{
          type: 'laptop',
          alt: 'Home Screen of madrasda website',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Aero Encrypt"
        description="An fusion offline password manager using a hybrid algorithm which is a combination of AES and RSA algorithms which can sync between devices using SSH."
        buttonText="View Project"
        buttonLink="https://github.com/PughalBot/AeroEncrypt"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="TIEMA Internship Tracker"
        description="A Website to track ongoing progress of Internship done by college students using ReactJS."
        buttonText="View project"
        buttonLink="https://github.com/PughalBot"
        model={{
          type: 'laptop',
          alt: 'Login of the TIEMA internship tracker',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Transport Automation App"
        description="An App and web app based Transport automation to monitor college bus and attendance of students using Flutterflow."
        buttonText="View Project"
        buttonLink="https://github.com/PughalBot/bus_app"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [sairamBusTexture, sairamBusTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [sairamBusTexture2, sairamBusTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={5}
        title="Synsara22 Website"
        description="A Website to make people register for the events conducted by CSE department of Sri Sairam Engineering College."
        buttonText="View project"
        buttonLink="https://github.com/PughalBot/synsara2022"
        model={{
          type: 'laptop',
          alt: 'Home Screen of Synsara website',
          textures: [
            {
              srcSet: [synTexture, synTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
