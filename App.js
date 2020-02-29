import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text
} from 'react-native';

import InputSearchButton from './src/components/InputSearchButton';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react',
    author: 'Fulano de Tal',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://facebook.github.io/redux',
    author: 'Mengano de Tal',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = searchTerm => item =>
item.title.toLowerCase().includes(searchTerm.toLowerCase());

const App = () => {
  const [dataList, setDataList] = useState(list);
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeHandler = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <View style={styles.container}>
          <InputSearchButton
            value={searchTerm}
            onChange={onChangeHandler}
          />
          <Table list={dataList} pattern={searchTerm} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Table = props => {
  return (
    <View>
      {props.list.filter(isSearched(props.pattern)).map(item => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.author}</Text>
          <Text>{item.num_comments}</Text>
          <Text>{item.points}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'lime',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
