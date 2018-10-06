import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button } from "react-native-elements";

import DisplayAnImage from "../components/placePhoto";


//This page is where the bookmarks would have shown up
//They would have pulled data from state and output them
//Into a few class components
//Currently only routing to the Place and Search page works
//That's why there's two buttons

export default ({ history }) => (
  <View style={{ flex: 1, padding: 20 }}>
    <Text
      style={{
        fontSize: 18,
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {"\n"} Bookmarks
    </Text>

    <Card
      containerStyle={{
        flexDirection: "row",
        borderColor: "#fff"
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          style={{ width: 90, height: 90, borderRadius: 10 }}
          source={{
            uri:
              "https://www.discoverlosangeles.com/sites/default/files/styles/featured_item_detail/public/poi_images/los_angeles_county_museum_of_art_lacma/h_2000crmlalacma-urban-lights-0_7b09047e-5056-a36f-23589df0c943a4dc.jpg"
          }}
        />
        <Text style={{ marginLeft: 20, alignSelf:"center" }}>
          Lacma {"\n"}
          5905 Wilshire Blvd, {"\n"}
          Los Angeles, CA 90036
        </Text>
      </View>
    </Card>
    <Card
      containerStyle={{
        flexDirection: "row",
        borderColor: "#fff"
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          style={{ width: 90, height: 90, borderRadius: 10 }}
          source={{
            uri:
              "https://www.discoverlosangeles.com/sites/default/files/styles/featured_item_detail/public/poi_images/los_angeles_county_museum_of_art_lacma/h_2000crmlalacma-urban-lights-0_7b09047e-5056-a36f-23589df0c943a4dc.jpg"
          }}
        />
        <Text style={{ marginLeft: 20, alignSelf: "center" }}>
          Lacma {"\n"}
          5905 Wilshire Blvd, {"\n"}
          Los Angeles, CA 90036
        </Text>
      </View>
    </Card>
    <Card
      containerStyle={{
        flexDirection: "row",
        borderColor: "#fff"
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          style={{ width: 90, height: 90, borderRadius: 10 }}
          source={{
            uri:
              "https://www.discoverlosangeles.com/sites/default/files/styles/featured_item_detail/public/poi_images/los_angeles_county_museum_of_art_lacma/h_2000crmlalacma-urban-lights-0_7b09047e-5056-a36f-23589df0c943a4dc.jpg"
          }}
        />
        <Text style={{ marginLeft: 20, alignSelf: "center" }}>
          Lacma {"\n"}
          5905 Wilshire Blvd, {"\n"}
          Los Angeles, CA 90036
        </Text>
      </View>
    </Card>


    <View style={{ paddingTop: 100 }} />

    <Button
      title="Add New Place"
      onPress={() => history.push("/search")}
      buttonStyle={{
        borderRadius: 10,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 10
      }}
      backgroundColor="rgba(4,4,206,1)"
    />
    <Button
      title="Place"
      onPress={() => history.push("/place")}
      buttonStyle={{
        borderRadius: 10,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 100
      }}
      backgroundColor="rgba(4,4,206,1)"
    />
  </View>
);

class Leaders extends Component{
  render(){
    return<View>
      <Text>Hello</Text>
    </View>
  }
};

