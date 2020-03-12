import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ResultItem = ({strDrink, strDrinkThumb}) => {
  return (
    <View style={styles.ItemContainer}>
      <View style={styles.Item}>
        <Image source={strDrinkThumb} />
        <Text style={styles.ItemName}>{strDrink}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
  },
  Item: {},
  ItemName: {},
});

ResultItem.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
};
export default ResultItem;
