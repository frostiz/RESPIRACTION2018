import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <View style={style.container}>
                <Text>Merci d'avoir utiliser Parlon'Asthme !</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80D0D0'
    }
});