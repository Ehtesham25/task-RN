import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Box, Button, Icon, MyText} from '../components';
import {images} from '../assets';

const Landing = ({navigation}) => {
  return (
    <Box bg="white" full>
      <Box row full between>
        <Icon src={images.leftOval} mode="contain" />
        <Icon
          position="absolute"
          mode="contain"
          zIdx={1000}
          src={images.landing}
        />
        <Icon src={images.oval} mode="contain" />
      </Box>
      <Box full around>
        <Box df col center>
          <MyText color="gray" fs={RFValue(24)} bold>
            HASHLOOPS Store!
          </MyText>
          <MyText
            align="center"
            pad={` ${wp(1)}px ${wp(15)}px  0 ${wp(15)}px`}
            fs={RFValue(15)}>
            Dummy text We long experience in Audio Industry. we create the best
            quality products.
          </MyText>
        </Box>
        <Box full centerAll>
          <Button
            onPress={() => navigation.navigate('login')}
            src={images.arrowRight}
            pad={` ${wp(2)}px ${wp(15)}px ${wp(2)}px ${wp(5)}px`}
            right={20}
            bg="#C6AB59"
            fs={RFValue(16)}
            color="white"
            text="GET STARTED"
            position="absolute"
            fromRight={10}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
