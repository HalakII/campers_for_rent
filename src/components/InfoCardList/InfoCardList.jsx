import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../../reduxConfig/infoDetails/infoDetailsSlice';
import { selectIsLoadMore } from '../../reduxConfig/selectors';
import InfoCard from 'components/InfoCard/InfoCard';
import css from './InfoCardList.module.css';

export default function InfoCardList({ cards }) {
  const isLoadMore = useSelector(selectIsLoadMore);
  const dispatch = useDispatch();

  const handleClickMore = () => {
    dispatch(incrementPage());
  };
  return (
    <div>
      {cards.length > 0 && (
        <ul className={css.cardList}>
          {cards.map(card => (
            <InfoCard key={card._id} id={card._id} card={card} />
          ))}
          {cards.length > 0 && isLoadMore && (
            <button onClick={handleClickMore} className={css.btn}>
              Load more
            </button>
          )}
        </ul>
      )}
    </div>
  );
}
