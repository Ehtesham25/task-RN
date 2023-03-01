import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const Tab: React.FC<props> = ({setState, state}) => {
  const handleState = (val: string) => {
    setState(val);
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleState('Hooks')}>
          <Text
            style={[
              styles.button,
              {
                fontWeight: state == 'Hooks' ? 'bold' : 'normal',
              },
            ]}>
            Hooks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleState('MobX')}>
          <Text
            style={[
              styles.button,
              {
                fontWeight: state == 'MobX' ? 'bold' : 'normal',
              },
            ]}>
            MobX
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#32baa5',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    fontSize: 20,
    color: '#fff',
  },
});
