import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectInfo, selectPage } from '../../reduxConfig/selectors';
import { fetchInfoDetails } from '../../reduxConfig/infoDetails/operations';
import InfoCardList from '../../components/InfoCardList/InfoCardList';
import Filtres from '../../components/Filtres/Filtres';
import css from './Catalog.module.css';

const Catalog = () => {
  const page = useSelector(selectPage);
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

  useEffect(() => {
    dispatch(fetchInfoDetails(page));
  }, [dispatch, page]);

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
    </>
  );
};

export default Catalog;
