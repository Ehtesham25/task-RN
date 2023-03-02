import axios from 'axios';
import React from 'react';
import {SafeAreaView} from 'react-native';

import Items from './src/screens/Items';

export default function App() {
  const [items, setItems] = React.useState();
  const [cartItems, seCartItems] = React.useState([]);

  const getData = async () => {
    const data: any = await axios.get('https://dummyjson.com/carts');
    setItems(data);
  };

  React.useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(data => data.json())
      .then(res => {
        setItems(res.carts);
      });
  }, []);

  return (
    <>
      <Items data={items} cartItems={cartItems} setCartItems={seCartItems} />
    </>
  );
}
