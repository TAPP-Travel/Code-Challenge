import React, { Component } from "react";

import GooglePlaceAutocomplete from "react-native-google-place-autocomplete";

export default function Autocomplete() {
  return (
    <GooglePlaceAutocomplete
        googleAPIKey="AIzaSyDFlxVenFyGfCu1TaqV4y28g9eHlnYdulo"
      onResult={result => console.log}
      placeholder="Type to search..."
    />
  );
}















/*
import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    Button,
    ActivityIndicator,
    AppRegistry
} from 'react-native';

import { List, ListItem } from "react-native-elements";
var _ = require('lodash');

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            pageToken: '',
            refreshing: false,
            siteTitle: ''
        };
    }

    componentDidMount() {

        this.fetchData();
    }

    fetchData = () => {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = Number(position.coords.latitude.toFixed(6));
                const longitude = Number(position.coords.longitude.toFixed(6));
                const { pageToken } = this.state;
                const urlFirst = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=AIzaSyDFlxVenFyGfCu1TaqV4y28g9eHlnYdulo
    `;
                const urlNext = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=AIzaSyDFlxVenFyGfCu1TaqV4y28g9eHlnYdulo&pagetoken=${pageToken}`;

                let url = pageToken === '' ? urlFirst : urlNext
                console.log(url);
                console.log("url");
                this.setState({ loading: true });
                fetch(url)
                    .then(res => {
                        return res.json()
                    })
                    .then(res => {

                        const arrayData = _.uniqBy([...this.state.data, ...res.results], 'id')

                        this.setState({
                            siteTitle: "Restaurants Near By",
                            data: pageToken === '' ? res.results : arrayData,
                            loading: false,
                            refreshing: false,
                            pageToken: res.next_page_token
                        });

                    })
                    .catch(error => {
                        console.log(error);
                        this.setState({ loading: false });
                    });
            })
    };
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };
    renderHeader = () => {
        return (<Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>{this.state.siteTitle}</Text>)
    };
    renderFooter = () => {

        if (this.state.pageToken === undefined) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    handleRefresh = () => {
        this.setState(
            {
                pageToken: '',
                refreshing: true
            },
            () => {
                this.fetchData();
            }
        );
    };

    handleLoadMore = () => {
        this.fetchData();
    };
    render() {

        return (
            <View>
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        ListHeaderComponent={this.renderHeader}
                        ListFooterComponent={this.renderFooter}
                        renderItem={({ item }) => {

                            const rating = item.rating ? item.rating : 'na'

                            return (<View><ListItem
                                roundAvatar
                                title={`${item.name}` + " (" + `${rating}` + ")"}
                                subtitle={`${item.vicinity}`}
                                avatar={{ uri: item.icon }}
                                containerStyle={{ borderBottomWidth: 0 }}
                            />
                                <View
                                    style={{
                                        height: 1,
                                        width: "86%",
                                        backgroundColor: "#CED0CE",
                                        marginLeft: "14%"
                                    }}
                                /></View>
                            )
                        }}
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={50}
                    />
                </List>

            </View>
        );
    }
}

*/


/*
import React from 'react';
import {View, Text, Button} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };

const GooglePlacesInput = () => {
    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log(data, details);
            }}

            getDefaultValue={() => ''}

            query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyDFlxVenFyGfCu1TaqV4y28g9eHlnYdulo',
                language: 'en', // language of the results
                types: '(cities)' // default: 'geocode'
            }}

            styles={{
                textInputContainer: {
                    width: '100%'
                },
                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                }
            }}

            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                types: 'food'
            }}

            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            predefinedPlaces={[homePlace, workPlace]}

            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            renderLeftButton={() => <Image source={require('../assets/Button Back.png')} />}
            renderRightButton={() => <Text>Custom text after the input</Text>}
        />
    );
}

export default ({ history }) => (
    <View>
        <Text> This is Search page</Text>
        <Button title="Back" onPress={() => history.push("/")} />
        <Button title="Add New Place" onPress={() => history.push("/place")} />
    </View>
);

*/