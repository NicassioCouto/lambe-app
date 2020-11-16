import React from 'react';
    import { createStackNavigator } from '@react-navigation/stack';
import Client from '../stack/entity/Client'
import CreateClient from '../stack/create/CreateClient'
import SearchClient from '../stack/search/SearchClient'
import UpdateClient from '../stack/update/UpdateClient'
import DeleteClient from '../stack/delete/DeleteClient'

const {Navigator,Screen} = createStackNavigator();

function index(){
    return(
        <>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Search" component={SearchClient}/>
                <Screen name="Create" component={CreateClient}/>
                <Screen name="Update" component={UpdateClient}/>
                <Screen name="Delete" component={DeleteClient}/>
                <Screen name="Entity" component={Client}/>
            </Navigator>
        </>
    );
}

export default index;