
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';


function Detect(props) {
    return (
        <View>
            <TextInput style = {{color: '#000', borderBottomColor: '#000000',borderBottomWidth: 1}}
                underlineColorAndroid = "transparent"
                placeholderTextColor = "#000"
                placeholder = "Texto"
                multiline
                numberOfLines={10}
                color = '#000'
                autoCapitalize = "none"
            />
        </View>
    );
}

export default Detect;
