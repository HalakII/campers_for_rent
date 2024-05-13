import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectFavorites } from 'reduxConfig/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../reduxConfig/favorites/favoritesSlice';
import iconsSprite from '../assets/icons/sprite.svg';
import css from './InfoCard.module.css';
import Modal from '../Modal/Modal';

export default function InfoCard({ card }) {
  const [isShowModal, setIsShowModal] = useState(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const {
    _id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    adults,
    engine,
    transmission,
    details,
    reviews,
  } = card;

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(card));
  };
  const isFavorite = favorites.find(function (item) {
    return item._id === card._id;
  });

  const handleAddToFavorites = () => {
    const isAlreadyFavorite = favorites.some(item => item._id === card._id);
    if (!isAlreadyFavorite) {
      dispatch(addToFavorites(card));
    }
  };

  const toggleModal = () => setIsShowModal(prev => !prev);

  const defaultImg =
    'https://st3.depositphotos.com/1000647/18441/i/450/depositphotos_184414464-stock-photo-family-vacation-travel-rv-holiday.jpg';
  return (
    <>
      <li className={css.item} key={_id}>
        <div className={css.imgBox}>
          {gallery[0] ? (
            <img src={gallery[0]} alt="" loading="lazy" />
          ) : (
            <img src={defaultImg} alt="" loading="lazy" />
          )}
        </div>
        <div className={css.infoBox}>
          <div className={css.titleBox}>
            <span className={css.name}>{name}</span>
            <span className={css.price}>&#8364;{price.toFixed(2)}</span>
            {isFavorite ? (
              <button
                className={css.heartBtn}
                onClick={handleRemoveFromFavorites}
              >
                <svg className={css.favorIcon}>
                  <use xlinkHref={`${iconsSprite}#icon-heart`} />
                </svg>
              </button>
            ) : (
              <button className={css.heartBtn} onClick={handleAddToFavorites}>
                <svg className={css.heartIcon}>
                  <use xlinkHref={`${iconsSprite}#icon-heart`} />
                </svg>
              </button>
            )}
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
          <p className={css.trimmedText}>{description}</p>
          <ul className={css.infoList}>
            <li>
              <svg>
                <use xlinkHref={`${iconsSprite}#icon-adults`} />
              </svg>
              <p>{adults} adults</p>
            </li>
            <li>
              <svg>
                <use xlinkHref={`${iconsSprite}#icon-transmission`} />
              </svg>
              <p>
                {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
              </p>
            </li>
            <li>
              <svg>
                <use xlinkHref={`${iconsSprite}#icon-engine`} />
              </svg>
              <p>{engine.charAt(0).toUpperCase() + engine.slice(1)}</p>
            </li>
            <li>
              {details.kitchen ? (
                <>
                  <svg className={css.starIcon}>
                    <use xlinkHref={`${iconsSprite}#icon-kitchen`} />
                  </svg>
                  <p>Kitchen</p>
                </>
              ) : (
                <p>No kitchen </p>
              )}
            </li>
            <li>
              <svg>
                <use xlinkHref={`${iconsSprite}#icon-beds`} />
              </svg>
              <p>{details.beds} beds</p>
            </li>
            <li>
              {details.airConditioner ? (
                <>
                  <svg>
                    <use xlinkHref={`${iconsSprite}#icon-airConditioner`} />
                  </svg>
                  <p>AC</p>
                </>
              ) : (
                <p>No AC</p>
              )}
            </li>
          </ul>
          <button className={css.button} onClick={toggleModal}>
            Show more
          </button>
        </div>
      </li>
      {isShowModal && <Modal onClose={toggleModal} card={card} />}
    </>
  );
}
