import React, { Component } from "react";
import {AppRegistry, View, ImageBackground} from "react-native";

export default class DisplayAnImage extends Component {
    render() {

        return (
            <View style={{backgroundColor: '#f0f', flex:1 }}>
                
                <ImageBackground
                    style={{ width: 400, height: 400, }}
                    resizeMode="contain"
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />
                
            </View>
        );
    }
}
AppRegistry.registerComponent("DisplayAnImage", () => DisplayAnImage);
