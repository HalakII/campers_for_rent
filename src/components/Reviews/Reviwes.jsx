import React from 'react';
import iconsSprite from '../assets/icons/sprite.svg';
import css from './Reviwes.module.css';

export default function Reviwes({ card }) {
  const { reviews } = card;
  return (
    <ul className={css.reviewsList}>
      {reviews.length > 0 &&
        reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
          <li>
            <div className={css.box}>
              <div className={css.avatar}>
                {reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={css.name}>
                <p>{reviewer_name}</p>
                <ul className={css.starBox}>
                  {Array.from({ length: reviewer_rating }, (_, index) => (
                    <li key={index}>
                      <svg className={css.starIcon}>
                        <use xlinkHref={`${iconsSprite}#icon-star`} />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.text}>{comment}</p>
          </li>
        ))}
    </ul>
  );
}
