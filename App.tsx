import React from 'react';
import {SafeAreaView} from 'react-native';

import Items from './src/screens/Items';

export default function App() {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(data => data.json())
      .then(res => {
        setItems(res.carts);
      });
  }, []);

  return (
    <>
      <Items data={items} />
    </>
  );
}
