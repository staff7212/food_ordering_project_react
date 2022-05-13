
import HeaderCardButton from './HeaderCartButton';

import styles from './Header.module.css';
import suchiImage from '../../resources/sushi.jpg';

const Header = (props) => {

  return (
    <>
      <header className={styles.header}>
        <h1>Японская кухня</h1>
        <HeaderCardButton />
      </header>
      <div className={styles['main-image']}>
        <img src={suchiImage} alt="sushi" />
      </div>
    </>
  )
};

export default Header;