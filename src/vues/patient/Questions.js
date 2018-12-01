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
                <Text>COMMENCER LES QUESTIONS</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A1AB'
    }
});