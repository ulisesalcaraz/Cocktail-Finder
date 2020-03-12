import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const StartIcon = props => {
  return (
    <View style={styles.container}>
      <Icon name="cocktail" type="font-awesome" color="#fff7f7" size={46} />
      <Text style={styles.title}>
        <Text style={styles.boldTitle}>Cocktail</Text>Finder
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    letterSpacing: 3,
  },
  boldTitle: {
    fontWeight: 'bold',
  },
});

export default StartIcon;
