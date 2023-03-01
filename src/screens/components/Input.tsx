import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

interface props {
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
  formValue: string;
  width: number;
  text: string;
  name: string;
}

const Input: React.FC<props> = props => {
  const {width, setFormValue, formValue, text, name} = props;
  console.log('form value', formValue);
  const handleChange = (e: any, name: string) => {
    setFormValue({...formValue, [name]: e});
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter value"
        value={formValue}
        name={name}
        onChangeText={e => handleChange(e, name)}
        style={[
          styles.input,
          {
            width,
          },
        ]}
      />
      <Text style={{color: '#fff'}}>{text}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  input: {
    textDecorationLine: 'none',
    height: 36,
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    width: 280,
    color: '#fff',
  },
});
