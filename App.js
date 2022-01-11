import React, {Component} from 'react';
import {View,Text} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Translation"
    };
}
render() {
  const title = this.state.title;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}
export default App;