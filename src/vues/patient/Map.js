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
            <View style={{ flex: 1, backgroundColor: '#00A1AB', }}>
                <View>
                    <Text> Votre localisation </Text>
                </View>
                <View>
                    <Image resizeMode="contain"
                           style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height}}
                           source={{uri: 'https://www.google.com/search?q=google+map&client=firefox-b-ab&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi5q8rqmf_eAhUN-YUKHdZHBDEQ_AUIECgD&biw=1920&bih=915#imgrc=UEqmFZHK4PSGYM:'}}/>
                </View>
                <View style={style.bottomButton}>
                    <Button title='Valider' onPress={() => this.goToPage()}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    bottomButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        bottom: 10
    }
});