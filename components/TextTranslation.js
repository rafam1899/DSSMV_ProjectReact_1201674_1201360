import React, {useState,useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { URL_API, KEY, LOCATION, fetchTranslationStarted, fetchTranslation } from '../context/Actions';
import AppContext from '../context/AppContext';
import { Picker } from "@react-native-picker/picker";
import { languages } from '../teste';

const TextTranslation = () => {
    const [from, setFrom] = useState('Unknown');
    const [to, setTo] = useState('Unknown');
    const payload = {texto: this.texto};
    const { state, dispatch } = useContext(AppContext);
    const { text } = state;
    
    const { loading, error, data } = text;
    let traducao;
    
    const onPress = () => {
        dispatch(fetchTranslationStarted());
        const url = `${URL_API}`;
        const key = `${KEY}`;
        const location = `${LOCATION}`;
        fetchTranslation(url, key, location, texto, from, to, dispatch);
    }

    if (loading === true) {
        traducao = "";
    }
    else {
        if (error !== null) {
            traducao = "Error..."
        } else {
            if (data.length > 0) {
                traducao = data[0].translations[0].text;
            } else {
                traducao = "No translation";
            }
        }
    }

    return (
        <View style={styles.all}>
            <View style={[styles.card, styles.shadowProp]}>
                <TextInput style={styles.insere_text}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#000"
                placeholder = "Texto"
                multiline = {true}
                numberOfLines={10}
                autoCapitalize = "none"
                onChangeText={(text) => this.texto = text}
                />
            </View>
            

            <View style={{flexDirection:'row', marginBottom: 20, marginTop: 20}}>
                <View style={[styles.picker_border,styles.card, styles.shadowProp]}>
                    <Picker
                        selectedValue={from}
                        onValueChange={(value, index) => setFrom(value)}
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
                    <Image source={require("../assets/switch.png")} style={{width: 20, height: 20, marginTop:25,margin:12}} />
                </View>
                <View style={[styles.picker_border,styles.card, styles.shadowProp]} >
                    <Picker
                        selectedValue={to}
                        onValueChange={(value, index) => setTo(value)}
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
            <View style={[styles.card, styles.shadowProp]}>
                <TextInput 
                    style={styles.resultado}
                    underlineColorAndroid = "transparent"
                    value={(traducao)}
                    multiline
                    numberOfLines={10}
                    color = '#fff'
                    autoCapitalize = "none"
                    editable={false} 
                    selectTextOnFocus={false}
                />
            </View>
            
            <TouchableHighlight
                style={[styles.shadowProp, styles.card,styles.button]}
                onPress={onPress}
                ><Text style={{textAlign:'center',color:'#fff',fontSize: 20}}>Translate</Text>
            </TouchableHighlight>
            
        </View>
    );
}

const styles = StyleSheet.create({
    picker: {
      marginVertical: 10,
      width: '100%',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "#000",
      color: "#000",
    },
    button: {
        color: '#ffff',
        borderRadius:8,
        paddingTop: 20,
        marginTop: 20,
        paddingBottom: 20,
        backgroundColor:'#1b79f5'
    },
    item: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "black"
    },
    picker_border: {
        borderRadius:8,
        width: '50%',
        flex:1
    },
    insere_text: {
        color: '#000'
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',
      },
    resultado: {
        color: '#fff',
        borderRadius:8,
        backgroundColor:'#1b79f5'
    },
    all: {
        margin: 20
    }
      
});

export default TextTranslation;