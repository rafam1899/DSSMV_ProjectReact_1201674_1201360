import React, {useState,useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import { URL_API, KEY, LOCATION, fetchDetectionStarted, fetchDetection } from '../context/Actions';
import AppContext from '../context/AppContext';

const TextDetection = () => {
    const { state, dispatch } = useContext(AppContext);
    const { language } = state;
    
    const { loading, error, data } = language;

    let detecao
    let acerto
    let texto = ''
    
    const onPress = () => {
        if (texto.length == 0) {
            Alert.alert("Insira um texto");
        } else {
            dispatch(fetchDetectionStarted());
            const url = `${URL_API}`;
            const key = `${KEY}`;
            const location = `${LOCATION}`;
            fetchDetection(url, key, location, texto, dispatch);
        }
    }
    if (loading === true) {
        detecao = "";
    }
    else {
        if (error !== null) {
            detecao = "Error..."
        } else {
            if (data.length > 0) {
                detecao = data[0].language;
                acerto = data[0].score.toString();
            } else {
                detecao = "No translation";
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
                    onChangeText={(text) => texto = text}
                />
            </View>
           

            <View style ={{margin:10}}></View>

            <TouchableHighlight
                style={[styles.shadowProp, styles.card,styles.button]}
                onPress={onPress}
                ><Text style={{textAlign:'center',color:'#fff',fontSize: 20,}}>Detect</Text>
            </TouchableHighlight>

            <View style ={{margin:10}}></View>

            <View style={{flexDirection: 'row'}}>
                <Text style = {{flex: 1, color: 'black',borderWidth: 0,borderRadius:20,margin:5, textAlign:'center', fontWeight:'500', fontSize: 18}}>Language</Text>
                <Text style = {{flex: 1, color: 'black',borderWidth: 0,borderRadius:20,margin:5, textAlign:'center', fontWeight:'500', fontSize: 18}}>Score</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <TextInput style={[styles.card, styles.shadowProp, styles.language]}
                    underlineColorAndroid = "transparent"
                    value={(detecao)}
                    numberOfLines={1}
                    color = '#fff'
                    autoCapitalize = "words"
                    editable={false} 
                    selectTextOnFocus={false}
                />
                <TextInput style={[styles.card, styles.shadowProp, styles.language]}
                    underlineColorAndroid = "transparent"
                    value={(acerto)}
                    numberOfLines={1}
                    color = '#fff'
                    autoCapitalize = "words"
                    editable={false} 
                    selectTextOnFocus={false}
                />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        color: '#ffff',
        borderRadius:8,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor:'#1b79f5'
    },
    item: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "black"
    },
    insere_text: {
        color: '#000'
    },
    language: {
        flex: 1, 
        color: '#fff',
        borderRadius:8,
        backgroundColor:'#1b79f5', 
        textAlign:'center',
        fontSize: 20,
        width: '50%',
        marginRight: 5,
        marginLeft: 5
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
    all: {
        margin: 20
    }
      
});

export default TextDetection;