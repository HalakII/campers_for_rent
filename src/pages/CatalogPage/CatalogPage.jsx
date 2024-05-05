import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectInfo,
  selectIsLoading,
  selectError,
} from '../../reduxConfig/selectors';
import { fetchInfoDetails } from '../../reduxConfig/infoDetails/operations';
import InfoCardList from '../../components/InfoCardList/InfoCardList';
import Filtres from '../../components/Filtres/Filtres';
import css from './Catalog.module.css';
import { Loader } from '../../components/Loader/Loader';

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();

  const isEndCollection = info.length % 4 !== 0;

  useEffect(() => {
    dispatch(fetchInfoDetails(page));
  }, [dispatch, page]);

  const handleClickMore = () => {
    dispatch(fetchInfoDetails(page + 1));
    setPage(page + 1);
  };

  return (
    <>
      {isLoading && !error && <Loader />}
      <div className={css.homeBox}>
        <Filtres />
        <InfoCardList cards={info} />
      </div>
      {!isEndCollection && (
        <button onClick={handleClickMore} className={css.btn}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
