import InfoCard from 'components/InfoCard/InfoCard';
import css from './InfoCardList.module.css';

export default function InfoCardList({ cards }) {
  return (
    <div>
      {cards.length > 0 ? (
        <ul className={css.cardList}>
          {cards.map(card => (
            <InfoCard key={card._id} id={card._id} card={card} />
          ))}
        </ul>
      ) : (
        <p>There are no notes yet</p>
      )}
    </div>
  );
}
