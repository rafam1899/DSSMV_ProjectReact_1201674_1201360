import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Translate from './screens/Translate';
import Detect from './screens/Detect';
import AppProvider from './context/AppProvider';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const Tab = createBottomTabNavigator();

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Translate"       
          tabBarPosition= "bottom">
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
    </AppProvider>
  );
}

export default App;
