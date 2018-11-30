import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { Actions } from "react-native-router-flux";


export default class One extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    goToPage() {
        Actions.page2();
    }
    render () {
        return (
            <View>
                <Text> Vous etes sur la page 1</Text>
                <Button title="click ici" onPress={this.goToPage}/>
            </View>
        )
            }
}