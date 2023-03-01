import React from 'react';
import {Box, Button, Input, MyText} from '../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const AddNew = () => {
  return (
    <Box bg="white" full df col pad={`${wp(20)}px 0 ${wp(14)}px ${wp(5)}px`}>
      <Box>
        <MyText pad={`0 0 ${wp(5)}px 0`} weight="bold" fs={RFValue(20)}>
          Add New Car
        </MyText>
      </Box>
      <Box full mar={`${wp(10)}px 0 ${wp(20)}px 0`}>
        <MyText pad={`0 0 ${wp(3)}px 0 `}>Name</MyText>
        <Box pad={`0 0 ${wp(5)}px 0`}>
          <Input borderbottom={1} borderbottomcolor="grey" placeholder="Name" />
        </Box>
        <MyText pad={`0 0 ${wp(3)}px 0 `}>Model</MyText>
        <Box pad={`0 0 ${wp(5)}px 0`}>
          <Input
            borderbottom={1}
            borderbottomcolor="grey"
            placeholder="model"
          />
        </Box>
        <Box pad={`${wp(5)}px 0 0 0 `}>
          <MyText pad={`0 0 ${wp(3)}px 0 `}>Description</MyText>
          <Box>
            <Input
              borderbottom={1}
              borderbottomcolor="grey"
              placeholder="Description"
              multiline
            />
          </Box>
        </Box>
      </Box>
      <Box mar={`${wp(8)}px ${wp(8)}px 0 ${wp(8)}px`}>
        <Button
          text="Add"
          color="white"
          weight="bold"
          bg="#C6AB59"
          center
          pad={`${wp(3)}px ${wp(5)}px ${wp(3)}px ${wp(5)}px`}
          fontSize={RFValue(20)}
        />
      </Box>
    </Box>
  );
};

export default AddNew;
