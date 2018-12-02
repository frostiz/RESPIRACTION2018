import React from 'react';
import { Text, View, StyleSheet, Platform, Image, Dimensions, TouchableOpacity, Button} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { RaisedTextButton } from 'react-native-material-buttons';
import { BarCodeScanner, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class Scan extends React.Component {
    getDataCip() {
        let datas_cip;
        return datas_cip = [
            {
                cip: '3400938627947',
                name: 'SERETIDE'
            },
            {
                cip: '3400930059166',
                name: 'VENTOLINE'
            }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            inputMedic: '',
            scanning: false,
            lastScannedUrl: '',
            medics: []
        };
    }

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    findMedicName(datamatrix) {
        let cip = datamatrix.slice(4, 17);
        let array = this.getDataCip();
        for (let i in array) {
            if (array[i].cip === cip) {
                return array[i].name;
            }
        }
        return '';
    }

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            this.setState({
                lastScannedUrl: result.data,
                scanning: false
            });
            let name = this.findMedicName(result.data);
            this.addMedic(name);
        }
    };

    startScanner() {
        this.setState({
            scanning: true
        });
    }

    addMedic(medic) {
        let tmp = this.state.medics;
        tmp.push(medic);
        this.setState({
            inputMedic: '',
            medics: tmp
        });
    }

    showMedics() {
        return this.state.medics.map(function(medic, index) {
            return (
                <View key={medic + index}>
                    <Text style={{color: 'white'}}>- {medic}</Text>
                </View>
            );
        });
    }

    nextPage() {
        Actions.pa_check();
    }

    render () {
        if (this.state.scanning === true)
            return (
                <BarCodeScanner
                    onBarCodeRead={this._handleBarCodeRead}
                    style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                    }}
                />
            );
        return (
            <View style={[style.container, style.droidSafeArea]}>
                <View style={style.column}>
                    <View style={{width: '100%'}}>
                        <View style={{paddingTop: 55}}>
                            <TouchableOpacity onPress={() => this.startScanner()}>
                                <Image style={{width: Dimensions.get('window').width - 40 }} source={require('../../../assets/patient/qr-code-3.png')} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{textAlign: 'center', color: 'white', fontSize: 18, paddingTop: 30}}>Scannez vos médicaments</Text>
                        </View>
                        <View style={{paddingTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: "white", textAlign: 'center', fontSize: 18, padding: 4, borderWidth: 1, borderColor: "white", borderRadius: 10, width: 50}}>ou</Text>
                        </View>
                        <View style={{paddingTop: 0}}>
                            <TextField label="Entrez le nom de vos médicaments" baseColor={'white'} value={this.state.inputMedic} onChangeText={(input) => this.setState({inputMedic: input})} />
                        </View>
                        <View style={style.medicButton}>
                            <RaisedTextButton onPress={() => this.addMedic(this.state.inputMedic)} title='ok' color={TextField.defaultProps.tintColor} titleColor='white' />
                        </View>
                        {this.state.medics.length > 0 && <View style={{padding: 4, borderWidth: 1, borderColor: "white", borderRadius: 10}}>
                            {this.showMedics()}
                        </View>}
                    </View>
                </View>
                <View style={style.bottomButton}>
                    <Button title='Valider' onPress={() => this.nextPage()}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#80D0D0'
    },
    column: {
        //alignItems: 'center',
        //justifyContent: 'center',
        height: '100%'
    },
    qrcode: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    textScan: {
        textAlign: 'center',
        color: 'white'
    },
    addMedic: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column'
    },
    medicField: {
    },
    medicButton: {
        paddingBottom: 10
    },
    bottomButton: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        bottom: 10
    }
});