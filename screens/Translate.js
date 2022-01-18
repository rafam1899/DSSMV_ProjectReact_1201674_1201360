
import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableHighlight } from 'react-native';
import TextTranslation from '../components/TextTranslation';
import { ScrollView } from 'react-native-gesture-handler';

function Translate(props) {

    return (
        <View>
            <ScrollView>
                <TextTranslation />
            </ScrollView>
        </View >

    );
}

export default Translate;