import bstrust from 'assets/bstrust.png';
import bstrustLarge from 'assets/bstrust-large.png';

import gr3d2Large from 'assets/3dgr1-large.jpg';
import gr3d2 from 'assets/3dgr1.jpg';
import gr3dLarge from 'assets/3dgr2-large.jpg';
import gr3d from 'assets/3dgr2.jpg';

import raulAvto from 'assets/raulAvto.png';
import raulAvtoLarge from 'assets/raulAvto-large.png';

import cactusLightLarge from 'assets/cactus-light-large.png';
import cactusDarkLarge from 'assets/cactus-dark-large.png';
import cactusLight from 'assets/cactus-light.png';
import cactusDark from 'assets/cactus-dark.png';

// stock
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import sairamBusTexture from 'assets/sairambuss-login.jpg';
import sairamBusTextureLarge from 'assets/sairambuss-login-large.jpg';
import sairamBusTexture2 from 'assets/sairambuss-list.jpg';
import sairamBusTexture2Large from 'assets/sairambuss-list-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
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
        id="project-2"
        // alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Aero Encrypt"
        description="An fusion offline password manager using a hybrid algorithm which is a combination of AES and RSA algorithms which can sync between devices using SSH."
        buttonText="View Project"
        buttonLink="https://github.com/PughalBot/AeroEncrypt"
        model={{
          type: 'laptop',
          alt: 'Login of the TIEMA internship tracker',
          textures: [
            {
              srcSet: [bstrust, bstrustLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="TIEMA Internship Tracker"
        description="A Website to track ongoing progress of Internship done by college students using ReactJS."
        buttonText="View project"
        buttonLink="https://github.com/PughalBot"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gr3d, gr3dLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gr3d2, gr3d2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        // alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Transport Automation App"
        description="An App and web app based Transport automation to monitor college bus and attendance of students using Flutterflow."
        buttonText="View Project"
        buttonLink="https://github.com/PughalBot/bus_app"
        model={{
          type: 'laptop',
          alt: 'Login of the TIEMA internship tracker',
          textures: [
            {
              srcSet: [raulAvto, raulAvtoLarge],
              placeholder: sliceTexturePlaceholder,
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
              srcSet: [cactusDark, cactusDarkLarge],
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
