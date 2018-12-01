import React, { Component } from "react";
import {Button, Platform, StyleSheet, Text, View} from "react-native";
import { TextField } from 'react-native-material-textfield';
import RaisedTextButton from "react-native-material-buttons/src/components/raised-text-button";
import { Actions } from 'react-native-router-flux';

export default class Two extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputCity:''
        };
    }
    goToPage() {
        Actions.pa_map();
    }
    render () {
        return (
            <View style={style.container} >
                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                    <Text> Vous êtes éligible </Text>
                </View>
                <View style={style.medicField}>
                    <TextField label="Entrez votre ville" value={this.state.inputCity} onChangeText={(input) => this.setState({inputCity: input})} />
                </View>
                <View style={style.medicButton}>
                    <RaisedTextButton onPress={() => this.goToPage()} title='Géolocalise moi' color={TextField.defaultProps.tintColor} titleColor='white' />
                </View>
            <View style={style.bottomButton}>
                    <Button title='Valider' onPress={() => this.goToPage()}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    medicField: {
        padding: 20,
    },
    medicButton: {
        padding: 50,
    },
    bottomButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        bottom: 10
    }
});