import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StartIcon = props => {
  return (
    <View style={styles.container}>
      <View style={styles.icnContainer}>
        <Text style={styles.icon}>Icn</Text>
      </View>
      <View style={styles.iconTextContainer}>
        <Text style={styles.iconText}>
          <Text style={styles.boldText}>Cocktail</Text>Finder
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '40%',
    marginVertical: 30
  },
  icnContainer: {
    marginBottom: 30,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    padding: 16,
    height: 80,
    width: '50%',
    fontWeight: '300',
    borderWidth: 16,
    borderStyle: 'dotted',
    borderRadius: 19,
    textAlign: 'center'
  },
  iconTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 31,
    letterSpacing: 3,
  },
  boldText: {
    fontSize: 31,
    fontWeight: 'bold',
  },
});

export default StartIcon;
