import React from 'react';
import {Text, View, Button, Image, Dimensions} from "react-native";

export default class One extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render () {
        return (
            <View>
                <Text> Video page</Text>
                <Image
                    resizeMode="contain"
                    style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height}}
                    source={{uri: 'data:image/jpeg;base64,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'}}
                />
            </View>
        )
            }
}