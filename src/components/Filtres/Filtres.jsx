import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from '../../reduxConfig/filterSlice';
// import { selectFilter } from '../../reduxConfig/selectors';
import css from './Filtres.module.css';

export default function Filtres() {
  return (
    <div className={css.filtreBox}>
      <form>
        <label className={css.label}>
          Location
          <input
            className={css.input}
            type="text"
            name="filter"
            // value={filter}
            // onChange={handleChangeFilter}
          />
        </label>
        <p>Filters</p>
        <div>
          <h3>Vehicle equipment</h3>
        </div>
        <div>
          <h3>Vehicle type</h3>
        </div>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
