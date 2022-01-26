import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const PickerLanguage = (props) => {
    const [pickers, setPickers] = useState({
        from: 'Unknown',
        to: 'Unknown',
    });

    props.handlePickers(pickers.from, pickers.to);

    const code = Object.keys(props.languages.data.translation);

    const name = Object.keys(props.languages.data.translation).map((key) => props.languages.data.translation[key]);

    return (
        <View style={{flexDirection:'row', marginBottom: 20, marginTop: 20}}>
                <View style={[styles.picker_border,styles.card, styles.shadowProp]}>
                    <Picker
                        selectedValue={pickers.from}
                        onValueChange={value => setPickers(prevState => {
                            return {...prevState, from: value};
                          })}
                        style={styles.picker}
                    >
                        <Picker.Item label="Language" value="Unknown" />
                        {code.map((item, index) => {
                            return (<Picker.Item label={name[index].name} value={item} key={index}/>)
                        })}
                        
                        
                    </Picker>
                </View>
                <View style={{flex:0.3}}>
                    <Image source={require("../assets/switch.png")} style={{width: 20, height: 20, marginTop:25,margin:12}} />
                </View>
                <View style={[styles.picker_border,styles.card, styles.shadowProp]} >
                    <Picker
                        selectedValue={pickers.to}
                        onValueChange={value =>  setPickers(prevState => {
                            return {...prevState, to: value};
                        })}
                        style={styles.picker}
                    >
                        <Picker.Item label="Language" value="Unknown" />
                        {code.map((item, index) => {
                            return (<Picker.Item label={name[index].name} value={item} key={index}/>)
                        })}
                    </Picker>
                </View>
            </View>
    )
}
export default PickerLanguage;

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
