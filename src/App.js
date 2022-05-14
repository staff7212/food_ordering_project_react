import { useState } from 'react';
import CartContextProvider from './store/CartContextProvider';

import Cart from './component/Cart/Cart';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';

function App() {

  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  }

  const hideCartHandler = () => {
    setCartVisible(false);
  }
  
  return (
    <CartContextProvider>
      {cartVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
