import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Input from './components/Input';
import {Context} from '../context';

interface props {
  state: string;
  setFormValue: React.Dispatch<React.SetStateAction<string>>;
  formValue: string;
}

const Form: React.FC<props> = props => {
  const {setFormValue, formValue} = props;

  const {dispatch, state} = React.useContext(Context);

  const handleConvert = () => {
    dispatch({type: 'convert', payload: formValue});
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.heading}>unit converter (with {props.state})</Text>
        <Input
          setFormValue={setFormValue}
          formValue={formValue}
          width={300}
          value={state?.kg === '' ? formValue : '34'}
          name="lbs"
          text={state?.kg === '' ? 'lbs' : 'kg'}
        />
        <View style={styles.inputView}>
          <Input
            setFormValue={setFormValue}
            formValue={formValue}
            width={147}
            value={formValue}
            name="feet"
            text="ft"
          />
          <Input
            setFormValue={setFormValue}
            formValue={formValue}
            width={147}
            value={formValue}
            name="inch"
            text="in"
          />
        </View>
        {state?.meter !== '' && (
          <TextInput style={styles.input} value={String(state?.meter)} />
        )}
        <View style={[styles.buttonView, styles.inputView]}>
          <TouchableOpacity style={styles.imperial}>
            <Text style={styles.button}>Imperial</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.metric]}
            onPress={() => handleConvert()}>
            <Text style={[styles.button]}>Metric</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;

// #32baa5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111010',
  },
  main: {},
  heading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imperial: {
    backgroundColor: '#32baa5',
    padding: 20,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  metric: {
    backgroundColor: 'grey',
    padding: 20,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    fontSize: 20,
    color: '#fff',
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
    width: 300,
    color: '#fff',
  },
});
