import React from 'react';
import { Text, View, StyleSheet, Platform, Image, Dimensions, TouchableOpacity} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { RaisedTextButton } from 'react-native-material-buttons';
import { BarCodeScanner, Permissions } from 'expo';


export default class Scan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMedic: '',
            scanning: false,
            lastScannedUrl: '',
            medics: []
        };
        const datas_cip = [
            {
                cip: '3400938627847',
                name: 'Ramipril'
            }
        ];
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

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            this.setState({
                lastScannedUrl: result.data,
                scanning: false
            });
        }
    };

    startScanner() {
        this.setState({
            scanning: true
        });
    }

    addMedic() {
        let tmp = this.state.medics;
        tmp.push(this.state.inputMedic);
        this.setState({
            inputMedic: '',
            medics: tmp
        });
    }

    showMedics() {
        return this.state.medics.map(function(medic, index) {
            return (
                <View key={medic + index}>
                    <Text>- {medic}</Text>
                </View>
            );
        });
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
            <View style={style.container} >
                <View style={style.qrcode}>
                    <TouchableOpacity onPress={() => this.startScanner()}>
                        <Image style={{width: Dimensions.get('window').width - 40 }} source={require('../../../assets/patient/qrcode-2.png')} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={style.textScan}>Veuillez scanner les médicaments de votre traitement ou indiquez les ci-dessous</Text>
                    {this.state.lastScannedUrl !== '' && <Text style={{textAlign: 'center'}}>Scanned {this.state.lastScannedUrl}</Text>}
                </View>
                <View style={style.addMedic}>
                    <View style={style.medicField}>
                        <TextField label="Entrez le nom de vos médicaments" value={this.state.inputMedic} onChangeText={(input) => this.setState({inputMedic: input})} />
                    </View>
                    <View style={style.medicButton}>
                        <RaisedTextButton onPress={() => this.addMedic()} title='ok' color={TextField.defaultProps.tintColor} titleColor='white' />
                    </View>
                    <View>
                        {this.showMedics()}
                    </View>
                </View>
            </View>
        );
    }
}
//ii
const style = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    qrcode: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    textScan: {
        textAlign: 'center'
    },
    addMedic: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column'
    },
    medicField: {},
    medicButton: {
        paddingBottom: 10
    }
});