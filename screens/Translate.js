
import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight } from 'react-native';

import { Picker } from "@react-native-picker/picker";
import { ScrollView } from 'react-native-gesture-handler';

function Translate(props) {
    const [country, setCountry] = useState('Unknown');

    return (
        <View>
            <ScrollView>

                <TextInput style = {{color: '#000', borderColor: '#000000',borderWidth: 1,borderRadius:20,margin:10,borderColor:'blue'}}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#000"
                placeholder = "Texto"
                multiline = {true}
                numberOfLines={10}
                color = '#000'
                autoCapitalize = "none"
                />

                <View style={{flexDirection:'row', margin:20}}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius:50,
                            width: '50%',
                            flex:1,
                            marginRight:25
                        }}>
                        <Picker
                            selectedValue={country}
                            onValueChange={(value, index) => setCountry(value)}
                            mode="dropdown" // Android only
                            style={styles.picker}
                        >
                            <Picker.Item label="Language" value="Unknown" />
                            <Picker.Item label="Ingles" value="en" />
                            <Picker.Item label="Portugues" value="pt" />
                            <Picker.Item label="Frances" value="fr" />
                        </Picker>
                    </View>
                    <View style={{flex:0.3}}>
                        <Image source={require("../assets/switch.png")} style={{width: 20, height: 20, marginTop:25}} />
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius:50,
                            width: '50%',
                            flex:1
                        }}>
                        <Picker
                            selectedValue={country}
                            onValueChange={(value, index) => setCountry(value)}
                            mode="dropdown" // Android only
                            style={styles.picker}
                        >
                            <Picker.Item label="Language" value="Unknown" />
                            <Picker.Item label="Ingles" value="en" />
                            <Picker.Item label="Portugues" value="pt" />
                            <Picker.Item label="Frances" value="fr" />
                        </Picker>
                    </View>
                </View>
                <TextInput style = {{color: '#', borderColor: '#000000',borderWidth: 1,borderRadius:20,margin:10,borderColor:'#ffffff', backgroundColor:'#1a73e9'}}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#fff"
                placeholder = "Resultado"
                multiline
                numberOfLines={10}
                color = '#fff'
                autoCapitalize = "none"
                editable={false} 
                selectTextOnFocus={false}
                />
                
                <TouchableHighlight
                    style={styles.button}
                    //onPress={() => this.submitSuggestion(this.props)}
                ><Text style={{textAlign:'center',color:'#fff'}}>Translate</Text></TouchableHighlight>
            </ScrollView>
        </View >

    );
}

export default Translate;

const styles = StyleSheet.create({
    picker: {
      marginVertical: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: "#000",
      color: "#000",
    },
    button: {
        color: '#ffff',
        borderWidth: 1,
        borderRadius:20,
        paddingTop: 20,
        paddingBottom: 20,
        margin:10,
        borderColor:'#ffffff',
        backgroundColor:'#1a73e9'
      },
      
  });