import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import React from 'react';
import Box from './Box';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const {height} = Dimensions.get('screen');

const WelcomeLanding = ({navigation}) => {
  const landingAnimation = React.useRef(new Animated.Value(0)).current;
  const translate = React.useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  React.useEffect(() => {
    Animated.timing(landingAnimation, {
      toValue: height / 2,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(translate, {
        toValue: {x: -220, y: 220},
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('login');
      });
    });
  }, []);

  return (
    <Box full bg="grey" center pad={`${wp(10)}px 0 0 0`}>
      <Animated.View
        style={[
          styles.view,
          {
            transform: [{translateY: landingAnimation}],
          },
        ]}>
        <Animated.Text
          style={[
            styles.text,
            {
              transform: [{translateX: translate.x}],
            },
          ]}>
          Well
        </Animated.Text>
        <Animated.Text
          style={[
            styles.text,
            {
              transform: [{translateX: translate.y}],
            },
          ]}>
          Come
        </Animated.Text>
      </Animated.View>
    </Box>
  );
};

export default WelcomeLanding;

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '400',
    color: '#fff',
    fontSize: 27,
    paddingHorizontal: 10,
  },
});
