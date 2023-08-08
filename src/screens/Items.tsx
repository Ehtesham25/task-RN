import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Box, Icon, Input, MyText} from '../components';


import {images} from '../assets';

interface props {
  data: any;
  cartItems: any;
  setCartItems: React.Dispatch<React.SetStateAction<any>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Items: React.FC<props> = ({
  data,
  cartItems,
  setCartItems,
  search,
  setSearch,
}) => {
  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <Box full bg="white">
      <Box row between pad={`${wp(15)}px 0 0 ${wp(10)}px}`}>
        <Box>
          <MyText bold fs={RFValue(16)}>
            Lets Find
          </MyText>
          <MyText bold fs={RFValue(20)}>
            Favourite Plant
          </MyText>
        </Box>
        <Box mar={`0 ${wp(3)}px 0 0 `}>
          <Box
            wd={wp(5)}
            ht={wp(5)}
            hasRadius={50}
            absolute
            centerAll
            top={-11}
            right={-2}
            bg="orange">
            <MyText>{cartItems?.length | 0}</MyText>
          </Box>
          <Icon src={images.cart} />
        </Box>
      </Box>
      <Box relative>
        <TextInput
          value={search}
          onChangeText={e => setSearch(e)}
          placeholder="search here"
          style={styles.input}
        />
        <Box
          centerAll
          wd={wp(11)}
          ht={wp(11)}
          hasRadius={10}
          bg="#32baa5"
          absolute
          right={13}
          top={13}>
          <TouchableOpacity>
            <Icon src={images.search} />
          </TouchableOpacity>
        </Box>
      </Box>
      <Box pad={`0 0 0 ${wp(5)}px}`}>
        <FlatList
          data={data}
          keyExtractor={(_, idex) => idex.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <Box
                ht={wp(30)}
                wd={wp(40)}
                style={styles.shadow}
                centerAll
                hasRadius={5}
                pad={`${wp(3)}px`}
                mar={`${wp(3)}px`}>
                <Image source={images.car2} style={styles.image} />
                <Box row between wd={wp(38)}>
                  <Box>
                    <MyText bold>{item.products[0].title.split(' ')[0]}</MyText>
                    <MyText fs={RFValue(16)}>
                      ${item.products[0].price}{' '}
                      <MyText>${item.products[0].price}</MyText>
                    </MyText>
                  </Box>
                  <TouchableOpacity onPress={() => addToCart(item)}>
                    <Icon src={images.cart} />
                  </TouchableOpacity>
                </Box>
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export default Items;

const styles = StyleSheet.create({
  input: {
    textDecorationLine: 'none',
    padding: wp(3.7),
    backgroundColor: '#a1a1a119',
    margin: wp(3),
    borderRadius: 15,
    color: '#000',
  },
  shadow: {
    backgroundColor: '#a1a1a119',
    borderColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 3,
      height: 5,
    },
  },
  image: {
    resizeMode: 'contain',
    width: wp(20),
    height: wp(19),
  },
});
