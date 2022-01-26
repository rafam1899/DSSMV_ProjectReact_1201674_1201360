import React, {useState,useContext, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { URL_API, URL_API_GET, KEY, LOCATION, fetchTranslationStarted, fetchTranslation, fetchListStarted, fetchList } from '../context/Actions';
import AppContext from '../context/AppContext';

import { languages } from '../teste';
import PickerLanguage from './PickerLanguage' ;

const TextTranslation = () => {
    const [from, setFrom] = useState('Unknown');
    const [to, setTo] = useState('Unknown');
    const [texto, setTexto] = useState({
        s: '',
      });
    const { state, dispatch} = useContext(AppContext);
    const { text, languages } = state;

    let traducao;

    const handlePickers = (from,to) => {
        setFrom(from);
        setTo(to);
    }

    useEffect(() => {
        dispatch(fetchListStarted());
        const url = `${URL_API_GET}`;
        const request = {};
        fetchList(url, request, dispatch);
        
    }, []);

    const onPress = () => {
        if (texto.s.length === 0) {
            Alert.alert("Insira um texto");
        } else {
            dispatch(fetchTranslationStarted());
            const url = `${URL_API}`;
            const key = `${KEY}`;
            const location = `${LOCATION}`;
            fetchTranslation(url, key, location, texto.s, from, to, dispatch);
        }
    }

    if (text.loading === true) {
        traducao = "";
        
    }
    else {
        if (text.error !== null) {
            traducao = "Error..";
        } else {
            if (text.data.length > 0) {
                traducao = text.data[0].translations[0].text;
            } else {
                traducao = "No translation";
            }
        }
    }

    if(text.s.length === 0) {
        traducao = ''
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
                onChangeText={texto =>
                    setTexto(prevState => {
                      return {...prevState, s: texto};
                    })
                  }
                value={texto.s}
                />
            </View>
            {!languages.loading && 
                <PickerLanguage languages={languages} handlePickers={handlePickers} />
            }
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