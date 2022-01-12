
import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Picker } from "@react-native-picker/picker";

function Translate(props) {
    const [country, setCountry] = useState('Unknown');

    return (
        <View>
            <TextInput style = {{color: '#000', borderBottomColor: '#000000',borderBottomWidth: 1}}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#000"
               placeholder = "Texto"
               multiline
               numberOfLines={10}
               color = '#000'
               autoCapitalize = "none"
            />

            <Text style={{ color: '#000', paddingTop: 20 }}> From </Text>
            <View
                style={{
                    borderWidth: 1
                }}>
                <Picker
                    selectedValue={country}
                    onValueChange={(value, index) => setCountry(value)}
                    mode="dropdown" // Android only
                    style={styles.picker}
                >
                    <Picker.Item label="Please select Language" value="Unknown" />
                    <Picker.Item label="Ingles" value="en" />
                    <Picker.Item label="Portugues" value="pt" />
                    <Picker.Item label="Frances" value="fr" />
                </Picker>
            </View>
            <Text style={{ color: '#000', paddingTop: 20 }}> To </Text>
            <View
                style={{
                    borderWidth: 1
                }}>
                <Picker
                    selectedValue={country}
                    onValueChange={(value, index) => setCountry(value)}
                    mode="dropdown" // Android only
                    style={styles.picker}
                >
                    <Picker.Item label="Please select Language" value="Unknown" />
                    <Picker.Item label="Ingles" value="en" />
                    <Picker.Item label="Portugues" value="pt" />
                    <Picker.Item label="Frances" value="fr" />
                </Picker>
            </View>
            <Text style={{ color: '#000', paddingTop: 20 }}> Result </Text>
            <Text style={{ color: '#000', paddingTop: 20 }}> ... </Text>
        </View >

    );
}

export default Translate;

const styles = StyleSheet.create({
    picker: {
      marginVertical: 10,
      width: 300,
      borderWidth: 1,
      borderColor: "#000",
      color: "#000",
    },
  });