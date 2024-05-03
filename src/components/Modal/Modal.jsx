import { useEffect } from 'react';
import iconsSprite from '../../img/icons/sprite.svg';
import css from './Modal.module.css';

export default function Modal({ card, onClose }) {
  const { name, price, rating, location, description, gallery, reviews } = card;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <div className={css.overly} data-backdrop onClick={handleClickBackdrop}>
      <div className={css.modalBox}>
        <div className={css.titleBox}>
          <div className={css.nameBox}>
            <span className={css.name}>{name}</span>
            <button className={css.closeBtn} onClick={onClose}>
              <svg className={css.closeIcon}>
                <use xlinkHref={`${iconsSprite}#icon-cross`} />
              </svg>
            </button>
          </div>

          <div className={css.ratingBox}>
            <svg className={css.starIcon}>
              <use xlinkHref={`${iconsSprite}#icon-star`} />
            </svg>
            <p>
              {rating}({reviews.length} review)
            </p>
            <svg className={css.pinIcon}>
              <use xlinkHref={`${iconsSprite}#icon-map-pin`} />
            </svg>
            <p>{location}</p>
          </div>
          <span className={css.price}>&#8364;{price}.00</span>
        </div>
        <div className={css.imgBox}>
          {gallery.map((photo, index) => (
            <div>
              <img
                key={index}
                src={photo}
                alt=""
                className={css.galleryImage}
              />
            </div>
          ))}
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.addBox}>
          <h3>Features</h3>
          <h3>Reviews</h3>
        </div>
      </div>
    </div>
  );
}
