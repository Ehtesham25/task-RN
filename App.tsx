import axios from 'axios';
import React from 'react';
import {SafeAreaView} from 'react-native';

import Items from './src/screens/Items';

export default function App() {
  const [items, setItems] = React.useState();
  const [cartItems, seCartItems] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const getData = async () => {
    const data: any = await axios.get('https://dummyjson.com/carts');
    setItems(data);
  };

  const handleFetchData = () => {
    fetch('https://dummyjson.com/carts')
      .then(data => data.json())
      .then(res => {
        setItems(res.carts);
      });
  };
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    if (search) {
      setItems(
        items.filter((item: any) =>
          item.products[0].title
            .toLowerCase()
            .includes(search.toLocaleLowerCase()),
        ),
      );
    } else {
      handleFetchData();
    }
  }, [search]);
  return (
    <>
      <Items
        data={items}
        cartItems={cartItems}
        setCartItems={seCartItems}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}
