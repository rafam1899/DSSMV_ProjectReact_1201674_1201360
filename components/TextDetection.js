import React, {useState,useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import { URL_API, KEY, LOCATION, fetchDetectionStarted, fetchDetection } from '../context/Actions';
import AppContext from '../context/AppContext';

const TextDetection = () => {
    const [detecao, setDetecao] = useState();
    const [acerto, setAcerto] = useState();
    const payload = {texto: this.texto};
    const { state, dispatch } = useContext(AppContext);
    const { language } = state;
    
    const { loading, error, data } = language;

    const onPress = () => {
        dispatch(fetchDetectionStarted());
        const url = `${URL_API}`;
        const key = `${KEY}`;
        const location = `${LOCATION}`;
        fetchDetection(url, key, location, texto, dispatch);

        if(data.length > 0) {
            setDetecao(data[0].language);
            setAcerto(data[0].score.toString());
        } else {
            setDetecao("error");
        }
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
                onPress={onPress}
                ><Text style={{textAlign:'center',color:'#fff'}}>Detect</Text>
            </TouchableHighlight>

            <View style ={{margin:20}}></View>

            <View style={{flexDirection: 'row'}}>
                <Text style = {{flex: 1, color: 'black',borderWidth: 0,borderRadius:20,margin:5, textAlign:'center', fontWeight:'500'}}>Language</Text>
                <Text style = {{flex: 1, color: 'black',borderWidth: 0,borderRadius:20,margin:5, textAlign:'center', fontWeight:'500'}}>Score</Text>
            </View>
            <View style={{flexDirection: 'row'}}></View>

            <View style={{flexDirection: 'row'}}>
                <TextInput style = {{flex: 1, color: '#fff',borderWidth: 1,borderRadius:20,margin:10,borderColor:'#ffffff', backgroundColor:'#1a73e9', textAlign:'center'}}
                    underlineColorAndroid = "transparent"
                    value={(detecao)}
                    numberOfLines={1}
                    color = '#fff'
                    autoCapitalize = "words"
                    editable={false} 
                    selectTextOnFocus={false}
                />
                <TextInput style = {{flex: 1, color: '#fff', borderColor: '#000000',borderWidth: 1,borderRadius:20,margin:10,borderColor:'#ffffff', backgroundColor:'#1a73e9', textAlign:'center'}}
                    underlineColorAndroid = "transparent"
                    value={(acerto)}
                    numberOfLines={1}
                    color = '#fff'
                    autoCapitalize = "words"
                    editable={false} 
                    selectTextOnFocus={false}
                />
            </View>
            <View style={{flexDirection: 'row'}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
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