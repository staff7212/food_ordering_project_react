
import { useContext } from 'react';

import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context';

import styles from './MealItem.module.css'

const MealItem = (props) => {

  const cartContext = useContext(CartContext);

  const formattedPrice = `$${props.price.toFixed(2)}`

  const addToCardHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCardHandler} id={props.id} />
      </div>
    </li>
  )
};

export default MealItem