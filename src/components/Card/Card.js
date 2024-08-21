import React, { useEffect, useRef } from 'react';
import styles from './Card.module.css';
import classNames from 'classnames';

const PriceList = ({ cards, ctaText }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const cardsContainer = document.querySelector(`.${styles.cards}`);
    const overlay = overlayRef.current;
    const cardElements = Array.from(document.querySelectorAll(`.${styles.card}`));

    const applyOverlayMask = e => {
      if (!cardsContainer || !overlay) return;
      const rect = cardsContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
      overlay.style.setProperty('--opacity', '1');
    };

    const updateOverlaySizeAndPosition = () => {
      if (!overlay || cardElements.length !== overlay.children.length) return;

      cardElements.forEach((cardEl, index) => {
        const overlayCard = overlay.children[index];
        if (!overlayCard) return;

        const cardRect = cardEl.getBoundingClientRect();
        overlayCard.style.width = `${cardRect.width}px`;
        overlayCard.style.height = `${cardRect.height}px`;
        overlayCard.style.left = `${
          cardRect.left - cardsContainer.getBoundingClientRect().left
        }px`;
        overlayCard.style.top = `${
          cardRect.top - cardsContainer.getBoundingClientRect().top
        }px`;
      });
    };

    // Обновление размеров и позиций при изменении размера карточек
    const resizeObserver = new ResizeObserver(updateOverlaySizeAndPosition);
    cardElements.forEach(card => resizeObserver.observe(card));

    // Обновление размеров и позиций при изменении размера окна
    window.addEventListener('resize', updateOverlaySizeAndPosition);
    document.body.addEventListener('pointermove', applyOverlayMask);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateOverlaySizeAndPosition);
      document.body.removeEventListener('pointermove', applyOverlayMask);
    };
  }, [cards]);

  return (
    <div
      className={`${styles.main__cards} ${styles.cards} px-4 sm:px-24 xl:px-10 max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl `}
    >
      <div className={styles.cards__inner}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={classNames(
              styles.card,
              'w-11/12 mx-auto sm:w-[47%] xl:w-64 2xl:w-80',
              'h-[600px] xl:h-[750px] 2xl:h-[700px]'
            )}
          >
            <h2 className={styles.card__heading}>{card.title}</h2>
            <p className={styles.card__price}>{card.price}</p>
            <ul role="list" className={`${styles.card__bullets} ${styles.flow}`}>
              {card.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href="#basic" className={`${styles.card__cta} ${styles.cta}`}>
              {ctaText}
            </a>
          </div>
        ))}
      </div>

      {/* Создаем оверлеи статически через JSX */}
      <div
        ref={overlayRef}
        className={`${styles.overlay} ${styles.cards__inner} px-4 sm:px-24 xl:px-10  max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl `}
      >
        {cards.map((_, index) => (
          <div
            key={index}
            className={classNames(
              styles.card,
              ' w-11/12 mx-auto sm:w-[47%] xl:w-64 2xl:w-80',
              'h-[600px] xl:h-[750px] 2xl:h-[700px]'
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
