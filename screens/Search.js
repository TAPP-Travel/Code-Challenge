import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    ActivityIndicator,
    Button
} from "react-native";

import { GoogleAutoComplete } from "react-native-google-autocomplete";
import LocationItem from "../components/LocationItem";




export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <GoogleAutoComplete
                    apiKey={"AIzaSyDFlxVenFyGfCu1TaqV4y28g9eHlnYdulo"}
                    debounce={500}
                    minLength={3}
                >
                    {({
                        handleTextChange,
                        locationResults,
                        fetchDetails,
                        isSearching,
                        inputValue,
                        clearSearchs
                    }) => (
                            <React.Fragment>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {"\n"}  Search
                                </Text>
                                <View style={styles.inputWrapper}>
                                    
            
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Search a places"
                                        onChangeText={handleTextChange}
                                        value={inputValue}
                                    />
                                    <Button title="Clear" onPress={clearSearchs} />
                                </View>
                                {isSearching && <ActivityIndicator size="large" color="red" />}
                                <ScrollView>
                                    {locationResults.map(el => (
                                        <LocationItem
                                            {...el}
                                            key={el.id}
                                            fetchDetails={fetchDetails}
                                        />
                                    ))}
                                </ScrollView>
                            </React.Fragment>
                        )}
                </GoogleAutoComplete>


            </View>
        );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    height: 40,
    width: 300,
    paddingHorizontal: 16,
    backgroundColor: "rgba(125,125,125,0.10)",
    borderRadius: 10
  },
  inputWrapper: {
    marginTop: 80,
    flexDirection: "row"
  }
});
