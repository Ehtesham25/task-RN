import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

import {cars} from '../data';
import {Box, Button, MyText, Icon} from '../components';
import {images} from '../assets';

const Car = ({item}) => {
  const {name, model, desc, image} = item;
  return (
    <Box
      style={styles.container}
      full
      df
      row
      pad={`${wp(5)}px ${wp(21)}px  ${wp(5)}px 0`}
      mar={`${wp(2)}px`}>
      <Box centerAll hasRadius={100}>
        <Image source={image} style={styles.image} />
      </Box>
      <Box>
        <MyText bold fs={RFValue(14)}>
          {name}({model})
        </MyText>
        <MyText pad={`0 ${wp(5)}px 0 0`} fs={RFValue(13)}>
          {desc}
        </MyText>
      </Box>
    </Box>
  );
};

const Cars = ({navigation}) => {
  return (
    <Box full relative>
      <Box zIndx="1000" between row mar={`${wp(4)}px} 0 0 0`}>
        <TouchableOpacity onPress={() => navigation.navigate('location')}>
          <Image source={images.map} style={styles.touchaOpacity} />
        </TouchableOpacity>
        <MyText fs={RFValue(20)} bold>
          Cars List
        </MyText>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <Image source={images.username} style={styles.touchaOpacity} />
        </TouchableOpacity>
      </Box>
      <Box mar={`0 0 ${wp(50)}px 0`}>
        <FlatList
          data={cars}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <>
                <Box full>
                  <Car item={item} />
                </Box>
              </>
            );
          }}
        />
      </Box>
      <Button
        absolute
        bottom="30"
        right="20"
        text="+"
        fs={RFValue(25)}
        hasRadius={100}
        bg="#32baa5"
        wd={wp(14)}
        ht={wp(14)}
        color="#fff"
        onPress={() => navigation.navigate('addnew')}
      />
    </Box>
  );
};

export default Cars;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32baa577',
    borderRadius: 5,
    borderColor: 'white',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: 'grey',
    shadowOffset: {
      width: 3,
      height: 5,
    },
  },
  image: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
  },
  touchaOpacity: {
    width: wp(8),
    height: wp(8),
    resizeMode: 'contain',
  },
});
