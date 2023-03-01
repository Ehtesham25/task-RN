import React from 'react';
import {Box, Button, Icon, Input, MyText} from '../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {images} from '../assets';

const Register = ({navigation}) => {
  return (
    <Box bg="white" full df col pad={`${wp(20)}px 0 ${wp(14)}px ${wp(5)}px`}>
      <Box>
        <MyText pad={`0 0 ${wp(5)}px 0`} weight="bold" fs={RFValue(20)}>
          Getting Started!
        </MyText>
        <MyText fs={RFValue(14)}>Create an account to continue!</MyText>
      </Box>
      <Box full mar={`${wp(10)}px 0 ${wp(20)}px 0`}>
        <MyText pad={`0 0 ${wp(3)}px 0 `}>Email</MyText>
        <Box relative pad={`0 0 ${wp(5)}px 0`}>
          <Icon position="absolute" top={0} left={-5} src={images.name} />
          <Input
            borderbottom={1}
            borderbottomcolor="grey"
            mar={`0 ${wp(10)}px 0 0`}
            pad={`${wp(2)}px 0 ${wp(2)}px ${wp(10)}px`}
            placeholder="Email"
          />
        </Box>
        <MyText pad={`0 0 ${wp(3)}px 0 `}>Username</MyText>
        <Box relative pad={`0 0 ${wp(5)}px 0`}>
          <Icon position="absolute" top={0} left={-5} src={images.name} />
          <Input
            borderbottom={1}
            borderbottomcolor="grey"
            mar={`0 ${wp(10)}px 0 0`}
            pad={`${wp(2)}px 0 ${wp(2)}px ${wp(10)}px`}
            placeholder="User Name"
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
        />
      </Box>
      <Button
        onPress={() => navigation.navigate('login')}
        pad={`${wp(2)}px 0 0 0`}
        align="center"
        text=" already have account? signIn"
      />
    </Box>
  );
};

export default Register;
