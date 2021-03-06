import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    setType(value) {
        if (value === 'pharmacien') {
            Actions.ph_home();
        } else if (value === 'patient') {
            Actions.pa_home();
        }
    }

    render() {
        return (
            <View style={styles.row}>
                <TouchableOpacity onPress={() => this.setType('pharmacien')}>
                    <View style={[styles.column2, styles.pharmaContainer]}>
                        <Text style={styles.pharmaText}>Pharmacien</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setType('patient')}>
                    <View style={[styles.column2, styles.patientContainer]}>
                        <Text style={styles.patientText}>Patient</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    column2: {
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pharmaContainer: {
        backgroundColor: '#00A1AB'
    },
    patientContainer: {
        backgroundColor: '#80D0D0'
    },
    pharmaText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24
    },
    patientText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24
    }
});