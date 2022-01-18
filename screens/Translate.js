
import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight } from 'react-native';
import TextTranslation from '../components/TextTranslation';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

function Translate(props) {

    return (
        <View>
            <View style={styles.header}>
             <Text style={styles.text}>Translate</Text>
                </View>
            <ScrollView>
                <TextTranslation />
            </ScrollView>
        </View >

    );
}
const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a73e9',
        padding:15
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ffff'
    }
});
export default Translate;