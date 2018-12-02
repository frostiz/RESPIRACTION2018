import React, { Component } from "react";
import {Text, View, StyleSheet, Button, Platform} from "react-native";
import { Actions } from 'react-native-router-flux';
import CheckBox from "react-native-check-box";

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
    }

    render () {
        return (
            <View style={[style.container, style.droidSafeArea]}>
                <View>
                    <Text style={{color:"white", textAlign: 'center', paddingBottom: 50, fontSize: 24, paddingTop: 35}}>Question 1</Text>
                </View>
                <View>
                    <Text style={{color:"white", textAlign: 'center', fontSize: 22, paddingBottom: 20, paddingLeft: 20, paddingRight: 20}}>Au cours des 4 dernières semaines, votre asthme vous a t-il gêné dans vos activités au travail, à l'école / université ou chez vous ?</Text>
                </View>
                <View style={{alignContent:'center', paddingLeft: 20, paddingRight: 20}}>
                <View>
                <CheckBox
                    onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    rightText={"Tout le temps"}
                    rightTextStyle={{color: "white", fontSize: 22, paddingTop: 10}}
                    checkBoxColor={'white'}
                />
                </View>
                <View>
                    <CheckBox
                        onClick={()=>{
                            this.setState({
                                isCheckedTwo:!this.state.isCheckedTwo
                            })
                        }}
                        isCheckedTwo={this.state.isCheckedTwo}
                        rightText={"La plupart du temps"}
                        rightTextStyle={{color: "white", fontSize: 22, paddingTop: 10}}
                        checkBoxColor={'white'}
                    />
                </View>
                <View>
                    <CheckBox
                        onClick={()=>{
                            this.setState({
                                isCheckedTwo:!this.state.isCheckedTwo
                            })
                        }}
                        isCheckedTwo={this.state.isCheckedTwo}
                        rightText={"Quelques fois"}
                        rightTextStyle={{color: "white", fontSize: 22, paddingTop: 10}}
                        checkBoxColor={'white'}
                    />
                </View>
                <View>
                    <CheckBox
                        onClick={()=>{
                            this.setState({
                                isCheckedTwo:!this.state.isCheckedTwo
                            })
                        }}
                        isCheckedTwo={this.state.isCheckedTwo}
                        rightText={"Rarement"}
                        rightTextStyle={{color: "white", fontSize: 22, paddingTop: 10}}
                        checkBoxColor={'white'}
                    />
                </View>
                <View>
                    <CheckBox
                        onClick={()=>{
                            this.setState({
                                isCheckedTwo:!this.state.isCheckedTwo
                            })
                        }}
                        isCheckedTwo={this.state.isCheckedTwo}
                        rightText={"Jamais"}
                        rightTextStyle={{color: "white", fontSize: 22, paddingTop: 10}}
                        checkBoxColor={'white'}
                    />
                </View>
                </View>
                <View style={style.bottomButton}>
                    <Button title='Valider' onPress={() => Actions.pa_end()}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        flex: 1,
        backgroundColor: '#80D0D0'
    },
    bottomButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        bottom: 10
    }
});