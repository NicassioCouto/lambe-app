import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from '../pages/User';
import Client from '../pages/Client';
import Product from '../pages/Product';
import Job from '../pages/Job';

const {Navigator,Screen} = createBottomTabNavigator();

function MenuBar(){
    return(
        <>
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="User" component={User}/>
                <Screen name="Client" component={Client}/>
                <Screen name="Product" component={Product}/>
                <Screen name="Job" component={Job}/>
            </Navigator>
        </NavigationContainer>
        </>
    );
}

export default MenuBar;