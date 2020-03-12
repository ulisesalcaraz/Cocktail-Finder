import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Start Screen</Text>
      <Button
        title="Search"
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;
