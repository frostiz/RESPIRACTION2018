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
        Actions.pa_end();
    }
    render () {
        return (
            <View style={style.container}>
                <View style={style.column}>
                    <View>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 24}}>Pour préparer au mieux ton entretien, réponds à ces 10 petites questions</Text>
                    </View>
                    <View style={{width: 100}}>
                        <View style={{paddingTop: 15}}>
                            <Button style={{}} title='Oui' onPress={() => this.yes()} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: "#80D0D0"
    },
    column: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});