
import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context'

import styles from './HeaderCartButton.module.css';

const HeaderCardButton = (props) => {

  const [isBntAnimated, setIsBntAnimated] = useState(false);
  const cartContext = useContext(CartContext);
  
  const cartItemsAmount = cartContext.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0)

  const buttonClases = `${styles.button} ${isBntAnimated ? styles.bump : ''}`
  
  useEffect(() => {
    if (cartContext.items.length === 0) return;

    setIsBntAnimated(true);

    const timer = setTimeout(() => {
      setIsBntAnimated(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [cartContext.items])

  return (
    <button className={buttonClases} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>
        {cartItemsAmount}
      </span>
    </button>
  )
};

export default HeaderCardButton;