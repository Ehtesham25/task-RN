import {View, Text} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Box, Button, Icon, Input, MyText} from '../components';
import {images} from '../assets';
import {RFValue} from 'react-native-responsive-fontsize';

const Profile = () => {
  return (
    <Box full bg="#fff">
      <Box centerAll pad={`${wp(5)}px 0 0 0`}>
        <Icon src={images.username} />
      </Box>
      <Box full mar={`${wp(10)}px ${wp(10)}px ${wp(20)}px ${wp(10)}px`}>
        <MyText pad={`0 0 ${wp(3)}px 0 `}>First Name</MyText>
        <Box pad={`0 0 ${wp(5)}px 0`}>
          <Input
            borderbottom={1}
            borderbottomcolor="grey"
            placeholder="first name"
          />
        </Box>
        <MyText pad={`0 0 ${wp(3)}px 0 `}>Last Name</MyText>
        <Box pad={`0 0 ${wp(5)}px 0`}>
          <Input
            borderbottom={1}
            borderbottomcolor="grey"
            placeholder="last name"
          />
        </Box>
        <Box pad={`${wp(5)}px 0 0 0 `}>
          <MyText pad={`0 0 ${wp(3)}px 0 `}>Email</MyText>
          <Box>
            <Input
              borderbottom={1}
              borderbottomcolor="grey"
              placeholder="email"
            />
          </Box>
        </Box>
        <Box pad={`${wp(5)}px 0 0 0 `}>
          <MyText pad={`0 0 ${wp(3)}px 0 `}>Mobile</MyText>
          <Box>
            <Input
              borderbottom={1}
              borderbottomcolor="grey"
              placeholder="mobile"
            />
          </Box>
        </Box>
        <Box pad={`${wp(5)}px 0 0 0 `}>
          <MyText pad={`0 0 ${wp(3)}px 0 `}>City</MyText>
          <Box>
            <Input
              borderbottom={1}
              borderbottomcolor="grey"
              placeholder="city"
            />
          </Box>
        </Box>
        <Box mar={`${wp(8)}px ${wp(8)}px 0 ${wp(8)}px`}>
          <Button
            text="Upadate"
            color="white"
            weight="bold"
            bg="#C6AB59"
            center
            pad={`${wp(3)}px ${wp(5)}px ${wp(3)}px ${wp(5)}px`}
            fontSize={RFValue(20)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
