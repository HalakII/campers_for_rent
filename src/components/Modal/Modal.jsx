import { useState, useEffect } from 'react';
import iconsSprite from '../assets/icons/sprite.svg';
import ModalDetails from '../ModalDetails/ModalDetails';
import Reviewes from '../Reviews/Reviwes';
import BookingForm from 'components/Form/BookingForm';
import css from './Modal.module.css';

export default function Modal({ card, onClose }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = card;

  const vehicleDetails = { form, length, width, height, tank, consumption };

  const handleSelect = index => {
    setSelectedTab(index);
  };

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
            <p className={css.ratingText}>
              {rating}({reviews.length} Reviews)
            </p>
            <svg className={css.pinIcon}>
              <use xlinkHref={`${iconsSprite}#icon-map-pin`} />
            </svg>
            <p>{location}</p>
          </div>
          <span className={css.price}>&#8364;{price.toFixed(2)}</span>
        </div>

        <div className={css.scrollableText}>
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
            <button
              onClick={() => handleSelect(0)}
              className={
                selectedTab === 0 ? `${css.button} ${css.active}` : css.button
              }
            >
              Features
            </button>
            <button
              onClick={() => handleSelect(1)}
              className={
                selectedTab === 1 ? `${css.button} ${css.active}` : css.button
              }
            >
              Reviews
            </button>
          </div>
          <div className={css.container}>
            {selectedTab === 0 && (
              <div className={css.featuresBox}>
                <ModalDetails card={card} />
                <h3 className={css.detTitle}>Vehicle details</h3>

                <ul className={css.detailList}>
                  {Object.entries(vehicleDetails).map(([key, value], index) => (
                    <li key={index}>
                      <p>{key}</p>
                      <p>{value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTab === 1 && (
              <div className={css.reviewesBox}>
                <Reviewes card={card} />
              </div>
            )}

            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
