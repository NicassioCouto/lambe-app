import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import User from '../stack/entity/User'
import UpdateUser from '../stack/update/UpdateUser'
import CreateJob from "../stack/create/CreateJob"

const {Navigator,Screen} = createStackNavigator();

function index(){
    return(
        <>
                <Navigator screenOptions={{headerShown:false}}>
                    <Screen name="Entity" component={User}/>
                    <Screen name="Update" component={UpdateUser}/>
                    <Screen name="Create" component={CreateJob}/>
                </Navigator>
        </>
    );
}

export default index;