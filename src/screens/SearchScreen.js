import React from 'react';
import { View, Text, Stylesheet, Button } from 'react-native';

const StartScreen = props => {
    return(
        <View>
            <Text>
                Search Screen
            </Text>
            <Button title="Go Back" onPress={() => {
                props.navigation.pop();
            }} />
        </View>
    );
}

const styles = Stylesheet.create({
    
});