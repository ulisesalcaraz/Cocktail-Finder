import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import StartIcon from './StartIcon';

const SearchButton = () => {
  return (
    <View style={styles.container}>
      <StartIcon />
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.textContainer}>
          <Icon
            name="magnify"
            type="material-community"
            size={31}
            color="#f5aa42"
            style={styles.icon}
          />
          <Text style={styles.text}>Search your favourite cocktail</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'canter',
  },
  textContainer: {
    flex: 6,
    height: '7%',
    width: '85%',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  icon: {
    marginHorizontal: 15,
  },
  text: {
    color: '#d1d1d1',
    fontSize: 15,
    fontWeight: '100',
    letterSpacing: 3,
    textAlign: 'center',
  },
});

export default SearchButton;
