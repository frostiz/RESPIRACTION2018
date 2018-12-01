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
            <View style={{flex:1, backgroundColor: '#00A1AB'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
                    <Text style={{color: "white"}}> Depuis quand prenez vous votre traitement ?</Text>
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
                        leftTextStyle={{color: "white"}}
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
                        leftTextStyle={{color: "white"}}
                    />
                </View>
                <View style={styles.bottomButton}>
                    <Button title='Valider' onPress={() => this.goToPage()}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        bottom: 10
    }
});