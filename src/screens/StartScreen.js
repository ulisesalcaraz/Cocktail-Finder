import React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';

const StartScreen = props => {
    return(
        <View>
            <Text>
                Start Screen
            </Text>
            <Button title="Search" onPress={() => {
                props.navigation.navigate('Search');
            }} />
        </View>
    );
}

const styles = Stylesheet.create({

});