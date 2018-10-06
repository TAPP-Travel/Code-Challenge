import React, { Component } from "react";
import {AppRegistry, View, ImageBackground} from "react-native";

export default class DisplayAnImage extends Component {
    render() {

        return <View style={{  flex:1 }}>
            <ImageBackground style={{ width: 400, height: 400 }} resizeMode="contain" source={{ uri: "https://www.discoverlosangeles.com/sites/default/files/styles/featured_item_detail/public/poi_images/los_angeles_county_museum_of_art_lacma/h_2000crmlalacma-urban-lights-0_7b09047e-5056-a36f-23589df0c943a4dc.jpg" }} />
          </View>;
    }
}
AppRegistry.registerComponent("DisplayAnImage", () => DisplayAnImage);
