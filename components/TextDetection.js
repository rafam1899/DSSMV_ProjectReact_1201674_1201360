import React, {useState,useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { URL_API, KEY, LOCATION, fetchDetectionStarted, fetchDetection } from '../context/Actions';
import AppContext from '../context/AppContext';

const TextDetection = () => {
    const [from, setFrom] = useState('Unknown');
    const [to, setTo] = useState('Unknown');
    const [detecao, setDetecao] = useState();
    const payload = {texto: this.texto, from: this.from, to: this.to};
    const { state, dispatch } = useContext(AppContext);
    const { text } = state;
    
    const { loading, error, data } = text;

    function TestFunction() {
        
        dispatch(fetchDetectionStarted());
            const url = `${URL_API}`;
            const key = `${KEY}`;
            const location = `${LOCATION}`;
            const request = {};
            fetchDetection(url, request, key, location, texto, from, to, dispatch);
            setDetecao(texto);
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

            <View style ={{margin:20}}></View>

            <TouchableHighlight
                style={styles.button}
                onPress={ () => TestFunction() }
                ><Text style={{textAlign:'center',color:'#fff'}}>Detect</Text>
            </TouchableHighlight>

            <View style ={{margin:20}}></View>

            <TextInput style = {{color: '#fff', borderColor: '#000000',borderWidth: 1,borderRadius:20,margin:10,borderColor:'#ffffff', backgroundColor:'#1a73e9', textAlign:'center'}}
                underlineColorAndroid = "transparent"
                value={(detecao)}
                multiline
                numberOfLines={5}
                color = '#fff'
                autoCapitalize = "words"
                editable={false} 
                selectTextOnFocus={false}
            />
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
        borderColor:'#1a73e9',
        marginTop:50
    }
      
});

export default TextDetection;