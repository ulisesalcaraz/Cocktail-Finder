import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import StartIcon from './StartIcon';

const InputSearchButton = props => {
  const [onActiveButton, setOnActiveButton] = useState(true);

  const ActivateButton = () => {
    setOnActiveButton(!onActiveButton);
  };

  if (onActiveButton) {
    return (
      <View style={styles.container}>
        <StartIcon />
        <TouchableOpacity
          style={styles.inputBox}
          activeOpacity={0.6}
          onPress={ActivateButton}>
          <Text style={styles.searchIcon}>SrchIcn</Text>
          <View style={styles.searchButton}>
            <Text style={styles.inputText}>Search your favourite cocktail</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.backButton} onPress={ActivateButton}>
          <Text>B</Text>
        </TouchableOpacity>
        <View style={styles.input}>
          <TextInput
            style={styles.inputBoxText}
            autoFocus
            placeholder="Search..."
            value={props.value}
            onChange={props.onChange}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputBox: {
    width: '95%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 10,
    opacity: 0.6,
    margin: 15,
  },
  searchButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '7%',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  backButton: {
    height: '100%',
    width: '10%',
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 11,
  },
  input: {
    height: '100%',
    width: '80%',
  },
  inputBoxText: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginEnd: 15,
  },
});

export default InputSearchButton;
