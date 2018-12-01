import React, { Component } from "react";
import {Text, View, Image, Dimensions, Button, StyleSheet} from "react-native";
import { Actions } from 'react-native-router-flux';


export default class Two extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    goToPage() {
        Actions.pa_form();
    }
    render () {
        return (
            <View style={{ flex: 1, backgroundColor: '#80D0D0', }}>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                    <Text style={{color:"white", fontSize: 28, justifyContent: 'center', alignItems: 'center'}}> Pharmacie la plus proche </Text>
                </View>
                <View>
                    <Image resizeMode="contain"
                           style={{height: 360}}
                           source={{uri: 'http://img.20mn.fr/lYrLCO3kTEi5ot_CZWPAuA/561x360_localisation-rue-stations-lille'}}/>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color:"white", borderWidth: 1, borderColor: "white", borderRadius: 5, marginTop: -50, marginBottom: 20, textAlign: 'center', padding: 3}}> Pharmacie De la croix {"\n"} 3 rue Alexandre Dumas {"\n"} 59000 Lille </Text>
                </View>
                <View style={style.reservationOneButton}>
                    <Button title='Samedi 8 / 12 à 10h30' onPress={() => this.goToPage()}/>
                </View>
                <View style={style.reservationButton}>
                    <Button title='Lundi 10 / 12 à 11h' onPress={() => this.goToPage()}/>
                </View>
                <View style={style.reservationButton}>
                    <Button title='Jeudi 13 / 12 à 15h' onPress={() => this.goToPage()}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    reservationButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    reservationOneButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        //paddingTop: 100
    }
});