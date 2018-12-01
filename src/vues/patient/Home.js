import React from 'react';
import { Text, View, StyleSheet, Platform} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <View style={style.droidSafeArea}>
                <Text>Patient home page (à faire)</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});