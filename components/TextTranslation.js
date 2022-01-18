import React, {useState,useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { URL_API, KEY, LOCATION, fetchTranslationStarted, fetchTranslation } from '../context/Actions';
import AppContext from '../context/AppContext';
import { Picker } from "@react-native-picker/picker";

const TextTranslation = () => {
    const [from, setFrom] = useState('Unknown');
    const [to, setTo] = useState('Unknown');
    const [traducao, setTraducao] = useState();
    const payload = {texto: this.texto, from: this.from, to: this.to};
    const { state, dispatch } = useContext(AppContext);
    const { text } = state;
    
    const { loading, error, data } = text;

    function TestFunction() {
        
        dispatch(fetchTranslationStarted());
            const url = `${URL_API}`;
            const key = `${KEY}`;
            const location = `${LOCATION}`;
            const request = {};
            fetchTranslation(url, request, key, location, texto, from, to, dispatch);
            setTraducao(texto.length);
    }

    return (
        <View>
            <TextInput style = {styles.insere_text}
            underlineColorAndroid = "transparent"
            placeholderTextColor = "#000"
            placeholder = "Texto"
            multiline = {true}
            numberOfLines={10}
            autoCapitalize = "none"
            onChangeText={(text) => this.texto = text}
            />

            <View style={{flexDirection:'row', margin:20}}>
                <View style={styles.picker_border}>
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
                    <Image source={require("../assets/switch.png")} style={{width: 20, height: 20, marginTop:25}} />
                </View>
                <View style={styles.picker_border} >
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
            <TextInput style = {{color: '#fff', borderColor: '#000000',borderWidth: 1,borderRadius:20,margin:10,borderColor:'#ffffff', backgroundColor:'#1a73e9'}}
                underlineColorAndroid = "transparent"
                value={(traducao)}
                multiline
                numberOfLines={10}
                color = '#fff'
                autoCapitalize = "none"
                editable={false} 
                selectTextOnFocus={false}
            />
            
            <TouchableHighlight
                style={styles.button}
                onPress={ () => TestFunction() }
                ><Text style={{textAlign:'center',color:'#fff'}}>Translate</Text>
            </TouchableHighlight>
        </View>
    );
}

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
    item: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "black"
    },
    picker_border: {
        borderWidth: 1,
        borderRadius:50,
        width: '50%',
        flex:1
    },
    insere_text: {
        color: '#000', 
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius:20,
        margin:10,
        borderColor:'blue'
    }
      
});

export default TextTranslation;