import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  useEffect(() => {
    // fetch async-mocks data here and handle it accordingly
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Cart cartItems={cartItems} />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route
          exact
          path="/item/:id"
          render={(props) => (
            <ItemDetailContainer {...props} handleAddToCart={handleAddToCart} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;







