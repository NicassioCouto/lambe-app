import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserStack from '../routes/UserStack';
import ClientStack from './ClientStack';
import ProductStack from './ProductStack';
import JobStack from './JobStack';
import { MaterialIcons} from '@expo/vector-icons';

const {Navigator,Screen} = createBottomTabNavigator();

function MenuBar(){
    return(
        <>
        <NavigationContainer>
            <Navigator 
                    tabBarOptions={{
                        style:{
                            elevation:0,
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30,
                            backgroundColor:'#3D3D3DCC',
                            backdropFilter:'blur(10px)',
                            borderColor:'transparent',
                        },
                        tabStyle:{
                            alignItems:'center',
                            justifyContent: 'center'
                        },
                        iconStyle:{
                            flex:0,
                            width:20,
                            height:20,
                        },
                        showLabel:false,
                        inactiveTintColor: '#E8E8E8',
                        activeTintColor: '#FFB9DA',
                    }}
                >
                <Screen 
                    name="User" 
                    component={UserStack}
                    options={{
                        tabBarIcon: ({size,color})=>{
                            return(
                                <MaterialIcons name="person" size={size} color={color}/>
                            )
                        }
                    }}
                />
                <Screen 
                    name="Client" 
                    component={ClientStack}
                    options={{
                        tabBarIcon: ({size,color})=>{
                            return(
                                <MaterialIcons name="style" size={size} color={color}/>
                            )
                        }
                    }}
                />
                <Screen 
                    name="Product" 
                    component={ProductStack}
                    options={{
                        tabBarIcon: ({size,color})=>{
                            return(
                                <MaterialIcons name="supervisor-account" size={size} color={color}/>
                            )
                        }
                    }}
                />
                <Screen 
                    name="Job" 
                    component={JobStack}
                    options={{
                        
                        tabBarIcon: ({size,color})=>{
                            return(
                                <MaterialIcons name="color-lens" size={size} color={color}/>
                            )
                        }
                    }}
                />
            </Navigator>
        </NavigationContainer>
        </>
    );
}

export default MenuBar;