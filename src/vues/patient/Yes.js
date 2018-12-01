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
            <View style={style.container}>
                <View style={style.column}>
                    <View>
                        <Text style={{color: "white", textAlign: 'center', fontSize: 26}}>Vous êtes éligible </Text>
                    </View>
                    <View style={{width: '100%'}}>
                        <View style={{paddingTop: 30}}>
                            <RaisedTextButton onPress={() => this.goToPage()} title='Chercher autour de moi' color={TextField.defaultProps.tintColor} titleColor='white' />
                        </View>
                        <View style={{paddingTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: "white", textAlign: 'center', fontSize: 18, padding: 4, borderWidth: 1, borderColor: "white", borderRadius: 10, width: 50}}>ou</Text>
                        </View>
                        <View>
                            <TextField label="Entrez votre ville" baseColor={'white'} value={this.state.inputCity} onChangeText={(input) => this.setState({inputCity: input})} />
                        </View>
                    </View>
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
    },
    bottomButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        bottom: 10
    }
});