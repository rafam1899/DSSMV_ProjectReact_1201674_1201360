import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import TextDetection from '../components/TextDetection';
import { ScrollView } from 'react-native-gesture-handler';


function Detect(props) {
    return (
        <View>
            <ScrollView>
                <TextDetection />
            </ScrollView>
        </View>
    );
}

export default Detect;
