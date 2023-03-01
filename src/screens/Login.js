import React from 'react';
import {Box, Button, Icon, Input, MyText} from '../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {images} from '../assets';

const Login = ({navigation}) => {
  return (
    <Box bg="white" full df col pad={`${wp(20)}px 0 ${wp(14)}px ${wp(5)}px`}>
      <Box>
        <MyText pad={`0 0 ${wp(5)}px 0`} weight="bold" fs={RFValue(20)}>
          Let’s Sign You In
        </MyText>
        <MyText fs={RFValue(14)}>Welcome back, you’ve been missed!</MyText>
      </Box>
      <Box full mar={`${wp(10)}px 0 ${wp(20)}px 0`}>
        <MyText pad={`0 0 ${wp(3)}px 0 `}>Username or Email</MyText>
        <Box relative pad={`0 0 ${wp(5)}px 0`}>
          <Icon position="absolute" top={0} left={-5} src={images.name} />
          <Input
            borderbottom={1}
            borderbottomcolor="grey"
            mar={`0 ${wp(10)}px 0 0`}
            pad={`${wp(2)}px 0 ${wp(2)}px ${wp(10)}px`}
            placeholder="User Name or Email"
          />
        </Box>
        <Box pad={`${wp(5)}px 0 0 0 `}>
          <MyText pad={`0 0 ${wp(3)}px 0 `}>Password</MyText>
          <Box relative>
            <Icon
              position="absolute"
              top={0}
              left={-5}
              src={images.lock}
              ht={25}
              wd={25}
            />
            <Input
              borderbottom={1}
              borderbottomcolor="grey"
              mar={`0 ${wp(10)}px 0 0`}
              pad={`${wp(2)}px 0 ${wp(2)}px ${wp(10)}px`}
              placeholder="Password"
            />
          </Box>
        </Box>
      </Box>
      <Box mar={`${wp(8)}px ${wp(8)}px 0 ${wp(8)}px`}>
        <Button
          src={images.login}
          right
          text="Sign In"
          color="white"
          weight="bold"
          bg="#C6AB59"
          center
          pad={`${wp(3)}px ${wp(15)}px ${wp(3)}px ${wp(5)}px`}
          fontSize={RFValue(20)}
          position="absolute"
          fromRight={10}
          onPress={() => navigation.navigate('cars')}
        />
      </Box>
      <Button
        onPress={() => navigation.navigate('register')}
        pad={`${wp(2)}px 0 0 0`}
        align="center"
        text=" don't have an account? signUp"
      />

      <Box mar={`${wp(8)}px ${wp(8)}px 0 ${wp(8)}px`}>
        <Button
          src={images.fb}
          left
          text="Connect With Facebook"
          color="white"
          weight="bold"
          cap
          pad={`${wp(3)}px ${wp(15)}px ${wp(3)}px ${wp(5)}px`}
          position="absolute"
          fromLeft={10}
          bg="#3C79E6"
          fontSize={RFValue(20)}
        />
      </Box>
    </Box>
  );
};

export default Login;
