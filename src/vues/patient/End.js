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
                <View>
                    <Text style={{color: "white", fontSize: 24, justifyContent: 'center', alignItems: 'center'}}>Votre rendez-vous</Text>
                </View>
                <View style={{paddingBottom: 250}}>
                    <Text style={{color: "white", fontSize: 24, justifyContent: 'center', alignItems: 'center'}}>à bien été pris en compte</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:"white", fontSize: 22, marginTop: -280, marginBottom: 20, textAlign: 'center', padding: 3}}> Pharmacie De la croix {"\n"} 3 rue Alexandre Dumas {"\n"} 59000 Lille</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:"white", fontSize: 22, borderWidth: 1, borderColor: "white", borderRadius: 5, marginTop: -50, marginBottom: 20, textAlign: 'center', padding: 3}}>samedi 8 décembre {'\n'} 10h30</Text>
                </View>
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