import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
//import {connect} from 'react-redux';

// import {searchDrinksAction} from '../redux/searchDuck';

const SearchInput = (/* {navigation, search} */) => {
  const [query, setQuery] = useState('');

  const goBack = () => {
    // navigation.goBack();
  };

  const handleOnChangeText = event => {
    setQuery(event.target.value);
    // search(query);
  };

  return (
    <View style={styles.headerContainer}>
      <Icon name="ei-chevron-left" type="evilicon" size={30} onPress={goBack} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChange={handleOnChangeText}
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
  input: {
    flex: 1,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});

// const mapStateToProps = state => {};
export default SearchInput; /* connect(mapStateToProps, {search: searchDrinksAction})(
  SearchInput,
); */
