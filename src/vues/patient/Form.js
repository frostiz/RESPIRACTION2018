import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { RaisedTextButton } from 'react-native-material-buttons';
import { Actions } from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            disabled: true
        };
    }

    _hideDateTimePicker = () => {this.setState({ isDateTimePickerVisible: false })};

    _showDateTimePicker = () => {this.setState({ isDateTimePickerVisible: true })};

    _handleDatePicked = (data) => {
        //console.log('date picked: ' + date);
        this.setState({//sdzd
            isDateTimePickerVisible: false,
            date: data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear(),
            disabled: false
        });
    };

    submit() {
        Actions.pa_prepare();
    }

    render () {
        return (
            <View style={style.container}>
                <Text style={{ color:"white" }}>Confirmez votre rendez-vous</Text>
                <View>
                    <TextField label="Entrez votre nom" baseColor={'white'} value={this.state.lastName} onChangeText={(input) => this.setState({lastName: input})} />
                    <TextField label="Entrez votre prénom" baseColor={'white'} value={this.state.firstName} onChangeText={(input) => this.setState({fistName: input})} />
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <TextField label="Date de naissance" baseColor={'white'} value={this.state.date} disabled={this.state.disabled} onChangeText={(input) => {
                            if (input === '')
                                this.setState({
                                    disabled: true,
                                    date: 'Entrez votre date naissance'
                                });
                        }}/>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </TouchableOpacity>
                    <TextField label="Entrez votre régime d'affiliation" baseColor={'white'} value={this.state.regime} onChangeText={(input) => this.setState({regime: input})} />
                    <TextField label="Entrez votre adresse" baseColor={'white'} value={this.state.adresse} onChangeText={(input) => this.setState({adresse: input})} />
                    <TextField label="Entrez votre numéro de téléphone" baseColor={'white'} value={this.state.tel} onChangeText={(input) => this.setState({tel: input})} />
                </View>
                <View style={style.bottomButton}>
                    <Button onPress={() => this.submit()} title='ok' color={TextField.defaultProps.tintColor} titleColor='white' />
                </View>
            </View>
        )
    }
}//kninn

const style = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        flex: 1,
        backgroundColor: '#00A1AB'
    },
    bottomButton: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        width: '100%'
    }
});