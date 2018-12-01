import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';
import CheckBox from "react-native-check-box";

export default class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckedTwo: false
        };
    }

    render () {
        return (
            <View style={style.container}>
                <View>
                    <Text style={{color:"white", textAlign: 'center', paddingBottom: 50}}>Question 1</Text>
                </View>
                <View>
                    <Text style={{color:"white", textAlign: 'center'}}>Au cours des 4 dernières semaines, {'\n'} votre astmme vous a t-il gêné dans{'\n'} vos activités au travail, à l'école / université ou chez vous ?</Text>
                </View>
                <View style={{alignContent:'center'}}>
                <View>
                <CheckBox
                    onClick={()=>{
                        this.setState({
                            isCheckedTwo:!this.state.isCheckedTwo
                        })
                    }}
                    isCheckedTwo={this.state.isCheckedTwo}
                    rightText={"Tout le temps"}
                    rightTextStyle={{color: "white"}}
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
                        rightText={"LA plupart du temps"}
                        rightTextStyle={{color: "white"}}
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
                        rightTextStyle={{color: "white"}}
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
                        rightTextStyle={{color: "white"}}
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
                        rightTextStyle={{color: "white"}}
                        checkBoxColor={'white'}
                    />
                </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80D0D0'
    }
});