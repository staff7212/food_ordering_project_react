
import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {

  const [isAmountValid, setIsAmountValid] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsAmountValid(true);
    const inputAmount = amountInputRef.current.value;
    if (inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 15) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Количество'
        input={{
          id: props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Добавить</button>
      {!isAmountValid && <p>Введите кол-во от 1 до 15</p>}
    </form>
  )
}

export default MealItemForm