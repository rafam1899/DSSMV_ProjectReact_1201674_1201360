import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import TextDetection from '../components/TextDetection';
import { ScrollView } from 'react-native-gesture-handler';


function Detect(props) {
    return (
        <View>
            <View style={styles.header}>
            <Text style={styles.text}>Detect Language</Text>
            </View>
            <ScrollView>
                <TextDetection />
            </ScrollView>
        </View>
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
export default Detect;
