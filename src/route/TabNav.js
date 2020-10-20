import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import History from '../screens/History';
import Calc from '../screens/Calc';
const Tab = createMaterialTopTabNavigator();

const TabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculator" component={Calc} />
        <Tab.Screen name="History" component={History} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNav;
