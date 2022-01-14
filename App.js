import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

import Translate from './screens/Translate';
import Detect from './screens/Detect';



function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen
          name="Translate"
          component={Translate}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/translate.png")} style={{width: 20, height: 20}} />),
            headerStyle: {
                backgroundColor: '#5390f5',
            },
            headerTintColor: '#fff',
        }}
        />
        <Tab.Screen
          name="Detect"
          component={Detect}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/lupa.png")} style={{width: 20, height: 20}} />),
            headerStyle: {
                backgroundColor: '#5390f5',
            },
            headerTintColor: '#fff',
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
