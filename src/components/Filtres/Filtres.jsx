import { Formik, Form, Field } from 'formik';
import iconsSprite from '../../img/icons/sprite.svg';

import css from './Filtres.module.css';

export default function Filtres({ handleSubmit }) {
  return (
    <div className={css.filtreBox}>
      <Formik
        initialValues={{
          location: '',
          type: '',
          equipment: [],
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.locationBox}>
            <label htmlFor="location" className={css.textLabel}>
              Location
            </label>
            <Field
              id="location"
              type="text"
              name="location"
              placeholder="Kyiv, Ukraine"
            />
          </div>
          <p className={css.text}>Filters</p>
          <h3 className={css.title}>Vehicle equipment</h3>

          <div className={css.equipmentBox}>
            <label htmlFor="equipment_ac" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-airConditioner`} />
              </svg>
              <p>AC</p>
              <Field
                className={css.checkbox}
                id="equipment_ac"
                type="checkbox"
                name="equipment"
                value="ac"
              />
              <span className={css.wraper}></span>
            </label>

            <label htmlFor="equipment_tm" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-transmission`} />
              </svg>
              <p>Automatic</p>
              <Field
                className={css.checkbox}
                id="equipment_tm"
                type="checkbox"
                name="equipment"
                value="transmition"
              />
              <span className={css.wraper}></span>
            </label>

            <label htmlFor="equipment_kitchen" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-kitchen`} />
              </svg>
              <p>Kitchen</p>
              <Field
                className={css.checkbox}
                id="equipment_kitchen"
                type="checkbox"
                name="equipment"
                value="kitchen"
              />
              <span className={css.wraper}></span>
            </label>

            <label htmlFor="equipment_tv" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-tv`} />
              </svg>
              <p>TV</p>
              <Field
                className={css.checkbox}
                id="equipment_tv"
                type="checkbox"
                name="equipment"
                value="tv"
              />
              <span className={css.wraper}></span>
            </label>

            <label htmlFor="equipment_shower" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-shower`} />
              </svg>
              <p>Shower/WC</p>
              <Field
                className={css.checkbox}
                id="equipment_shower"
                type="checkbox"
                name="equipment"
                value="shower"
              />
              <span className={css.wraper}></span>
            </label>
          </div>

          <h3 className={css.title}>Vehicle type</h3>
          <div className={css.vanBox}>
            <label htmlFor="type_van" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-van`} />
              </svg>
              <p>Van</p>
              <Field
                className={css.radioBtn}
                id="type_van"
                type="radio"
                name="type"
                value="van"
              />
              <span className={css.wraper}></span>
            </label>

            <label htmlFor="type_fully" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-fully`} />
              </svg>
              <p>Fully Integrated</p>
              <Field
                className={css.radioBtn}
                id="type_fully"
                type="radio"
                name="type"
                value="fully"
              />
              <span className={css.wraper}></span>
            </label>

            <label htmlFor="type_alcove" className={css.label}>
              <svg className={css.icon}>
                <use xlinkHref={`${iconsSprite}#icon-alcove`} />
              </svg>
              <p>Alcove</p>
              <Field
                className={css.radioBtn}
                id="type_alcove"
                type="radio"
                name="type"
                value="alcove"
              />
              <span className={css.wraper}></span>
            </label>
          </div>

          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
