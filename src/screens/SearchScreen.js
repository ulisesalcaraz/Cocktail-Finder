import React from 'react';
import {View, Text, Button /* StyleSheet, FlatList */} from 'react-native';
import {connect} from 'react-redux';

// import ResultItem from '../components/ResultItem';

const StartScreen = ({searchTerm, results, navigation}) => {
  /*const regex = new RegExp(`^${searchTerm}`);
    result = results.filter(searchResult  => regex.test(searchResult.strDrink));*/

  return (
    <View>
      <Text>Search Screen</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.pop();
        }}
      />

      {/*<FlatList
                key= { results.item.idDrink }
                item={ <ResultItem {...results.item} /> }
            />
            */}
    </View>
  );
};

// const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    searchTerm: state.search.searchText,
    results: state.search.searchResults,
  };
};

export default connect(mapStateToProps)(StartScreen);
