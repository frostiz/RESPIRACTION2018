import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Actions } from 'react-native-router-flux';

export default class Prepare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    yes () {
        Actions.pa_questions();
    }
    no () {
        Actions.end();
    }
    render () {
        return (
            <View style={style.container}>
                <Text>Pour préparer au mieux ton entretien, souhaites tu répondres à un petit questionnaire ?</Text>
                <Button title='Oui' onPress={() => this.yes()} />
                <Button title='Non' onPress={() => this.no()} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});