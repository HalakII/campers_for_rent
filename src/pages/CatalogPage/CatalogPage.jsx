import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInfo } from '../../reduxConfig/selectors';
import { fetchInfoDetails } from '../../reduxConfig/infoDetails/operations';
import InfoCardList from '../../components/InfoCardList/InfoCardList';
import Filtres from '../../components/Filtres/Filtres';
import css from './Catalog.module.css';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const info = useSelector(selectInfo);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    type: '',
    equipment: [],
  });
  const [filteredCards, setFilteredCards] = useState(info);

  const handleSubmit = ({ location, type, equipment }, actions) => {
    const searchQuery = {
      location: location.toLowerCase(),
      type: type.toLowerCase(),
      equipment: equipment.map(item => item.toLowerCase()),
    };
    setSearchFilters(searchQuery);

    const filtered = info.filter(
      ({ location, form, details, transmission }) =>
        location.toLowerCase().includes(searchQuery.location) &&
        form.includes(searchQuery.type) &&
        (transmission + [details]).includes(searchQuery.equipment)
    );

    setFilteredCards(filtered);
    actions.resetForm();
  };

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
      <div className={css.homeBox}>
        <Filtres handleSubmit={handleSubmit} />
        {filteredCards.length > 0 ? (
          <InfoCardList cards={filteredCards} />
        ) : (
          <InfoCardList cards={info} />
        )}
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
