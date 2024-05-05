import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetList } from '../../reduxConfig/infoDetails/infoDetailsSlice';
import { selectFavorites } from '../../reduxConfig/selectors';
import InfoCardList from '../../components/InfoCardList/InfoCardList';

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetList());
  }, [dispatch]);

  return (
    <>
      <InfoCardList cards={favorites} isFavorites={true} />
    </>
  );
}
