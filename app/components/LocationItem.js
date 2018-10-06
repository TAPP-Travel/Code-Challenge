import React, { PureComponent } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';

//this handles the logic for search and showing the list of places.

class LocationItem extends PureComponent {
    _handlePress = async () => {
        const res = await this.props.fetchDetails(this.props.place_id)
        
        console.log('result', res)

    }

    render() {
        return (
            <TouchableOpacity style={styles.root} onPress={this._handlePress}>
                <Text>{this.props.description}</Text>
            </TouchableOpacity>


        );
    }
}

const styles = StyleSheet.create({
    root: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center'
    }
})

export default LocationItem;