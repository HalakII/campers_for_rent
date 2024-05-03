import { useNavigate } from 'react-router-dom';
import css from './HomePage.module.css';


const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <main>
      <section className={css.section}>
        <div className={css.titleBox}>
          <h1 className={css.title}>
            Nature is my therapy, camping is my prescription. Click and go!
          </h1>
        </div>

        <button className={css.button} onClick={handleClick}>
          Start
        </button>
      </section>
     
    </main>
  );
};

export default HomePage;
