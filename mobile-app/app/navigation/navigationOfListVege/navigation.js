import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import EachVege from '../../screens/Settings/Vegetables/EachVege';
import Vegetables from '../../screens/Settings/Vegetables/Vegetables';

const VegeStack = createStackNavigator();
const VegeStackScreen = () => (
    <VegeStack.Navigator>
        <VegeStack.Screen name="VegeList" component={Vegetables} />
        <VegeStack.Screen name="EachVege" component={EachVege} />
    </VegeStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <VegeStackScreen/>
    </NavigationContainer>
);