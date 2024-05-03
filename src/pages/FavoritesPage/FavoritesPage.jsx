import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../reduxConfig/selectors';
import InfoCardList from '../../components/InfoCardList/InfoCardList';

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      {favorites.length === 0 ? (
        <p>There are no notes yet</p>
      ) : (
        <InfoCardList cards={favorites} />
      )}
     
    </>
  );
}
