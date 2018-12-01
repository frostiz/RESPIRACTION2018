import React from 'react';
import { Text, View, Button, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import CheckBox from 'react-native-check-box'
import TextField from "react-native-material-textfield/src/components/field";

export default class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            isCheckedTwo: false
        };
    }
    goToPage() {
            Actions.pa_yes();
    }
    render () {
        return (
            <View style={style.container}>
                <View style={style.column}>
                    <View>
                        <Text style={{textAlign: 'center', color: "white"}}> Depuis quand prenez vous votre traitement ?</Text>
                    </View>
                    <View style={{width: 200}}>
                        <View style={{paddingTop: 15, justifyContent: 'center'}}>
                            <CheckBox
                                onClick={()=>{
                                    this.setState({
                                        isChecked:!this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked}
                                rightText={"6 mois ou plus"}
                                rightTextStyle={{color: "white"}}
                                checkBoxColor={'white'}
                            />
                        </View>
                        <View style={{paddingTop: 15}}>
                            <CheckBox
                                onClick={()=>{
                                    this.setState({
                                        isCheckedTwo:!this.state.isCheckedTwo
                                    })
                                }}
                                isCheckedTwo={this.state.isCheckedTwo}
                                rightText={"Moins de 6 mois"}
                                rightTextStyle={{color: "white"}}
                                checkBoxColor={'white'}
                            />
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
    bottomButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        bottom: 10
    }
});