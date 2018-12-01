import React from 'react';
import { Text, View, Button, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import CheckBox from 'react-native-check-box'

export default class One extends React.Component {
    constructor(props) {
        super(props)
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
            <View style={{flex:1}}>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                <Text> Depuis quand prenez vous votre traitement ?</Text>
            </View>
            <View>
                <CheckBox
                    style={{flex: 1, padding: 100, paddingTop: 80}}
                    onClick={()=>{
                        this.setState({
                            isChecked:!this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    leftText={"6 mois ou plus"}
                />
                <CheckBox
                    style={{flex: 1, padding: 100, paddingTop: 80}}
                    onClick={()=>{
                        this.setState({
                            isCheckedTwo:!this.state.isCheckedTwo
                        })
                    }}
                    isCheckedTwo={this.state.isCheckedTwo}
                    leftText={"Moins de 6 mois"}
                />
            </View>
                <View style={styles.bottomView}>
                <Button title="Valider" onPress={this.goToPage}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomView:{
        width: '100%',
        height: 50,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    }
    })