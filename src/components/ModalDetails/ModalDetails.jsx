import React from 'react';
import iconsSprite from '../assets/icons/sprite.svg';
import css from '../Modal/Modal.module.css';

export default function ModalDetails({ card }) {
  const { adults, engine, transmission, details } = card;

  return (
    <>
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
          <p>{transmission.charAt(0).toUpperCase() + transmission.slice(1)}</p>
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
          <svg>
            <use xlinkHref={`${iconsSprite}#icon-airConditioner`} />
          </svg>
          <p>{details.airConditioner} air conditioner</p>
        </li>
        <li>
          <svg>
            <use xlinkHref={`${iconsSprite}#icon-cd`} />
          </svg>
          <p>CD</p>
        </li>
        <li>
          <svg>
            <use xlinkHref={`${iconsSprite}#icon-radio`} />
          </svg>
          <p>Radio</p>
        </li>
        <li>
          <svg>
            <use xlinkHref={`${iconsSprite}#icon-plate`} />
          </svg>
          <p>{details.hob} hob</p>
        </li>
      </ul>
    </>
  );
}
