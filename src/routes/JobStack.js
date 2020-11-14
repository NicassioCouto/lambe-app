import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchJob from "../stack/search/SearchJob"
import CreateJob from "../stack/create/CreateJob"
import UpdateJob from "../stack/update/UpdateJob"
import DeleteJob from "../stack/delete/DeleteJob"
import Job from '../stack/entity/Job'

const {Navigator,Screen} = createStackNavigator();

function index(){
    return(
        <>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Search" component={SearchJob}/>
                <Screen name="Create" component={CreateJob}/>
                <Screen name="Update" component={UpdateJob}/>
                <Screen name="Delete" component={DeleteJob}/>
                <Screen name="Entity" component={Job}/>
            </Navigator>
        </>
    );
}

export default index;