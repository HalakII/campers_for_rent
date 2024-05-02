import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInfo } from '../../reduxConfig/selectors';
import { fetchInfoDetails } from 'reduxConfig/infoDetails/operations';
import InfoCardList from '../../components/InfoCardList/InfoCardList';
import Filtres from '../../components/Filtres/Filtres';
import css from './Catalog.module.css';

const Catalog = () => {
  const info = useSelector(selectInfo);
  console.log(info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfoDetails());
  }, [dispatch]);

  return (
    <div className={css.homeBox}>
      <Filtres />
      <InfoCardList cards={info} />
      {/* {loading && <Loader />}  */}
    </div>
  );
};

export default Catalog;
