
import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      const existingCartItemIndex = state.items.findIndex(item => {
        return item.id === action.payload.id;
      })

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItem;
      let updatedItems;

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount
        }

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItem = {
          ...action.payload
        }
        updatedItems = [...state.items, updatedItem];
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.payload.price * action.payload.amount,
      };
    case 'REMOVE_ITEM':
      const existingCartItemIndexTwo = state.items.findIndex(item => {
        return item.id === action.payload;
      })

      const existingCartItemTwo = state.items[existingCartItemIndexTwo];

      const updateTotalAmount = state.totalAmount - existingCartItemTwo.price;

      let updatedItemsTwo;
      if (existingCartItemTwo.amount === 1) {
        updatedItemsTwo = state.items.filter(item => {
          return item.id !== action.payload;
        })
      } else {
        const updatedItemTwo = {...existingCartItemTwo, amount: existingCartItemTwo.amount - 1};

        updatedItemsTwo = [...state.items];
        updatedItemsTwo[existingCartItemIndexTwo] = updatedItemTwo
      }

      return {
        items: updatedItemsTwo,
        totalAmount: updateTotalAmount,
      };
    default: 
      return state;
  }
};

const CartContextProvider = (props) => {

  const [cartState, dispatch] = useReducer(cartReducer, defaultState)

  const addItemHandler = item => {
    dispatch({type: 'ADD_ITEM', payload: item})
  };

  const removeItemHandler = id => {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return(
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;