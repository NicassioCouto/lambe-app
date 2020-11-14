import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchProduct from "../stack/search/SearchProduct";
import CreateProduct from "../stack/create/CreateProduct";
import UpdateProduct from "../stack/update/UpdateProduct";
import DeleteProduct from "../stack/delete/DeleteProduct";
import Product from "../stack/entity/Product";

const {Navigator,Screen} = createStackNavigator();

function index(){
    return(
        <>
            <Navigator screenOptions={{headerShown:false}}>
                <Screen name="Search" component={SearchProduct}/>
                <Screen name="Create" component={CreateProduct}/>
                <Screen name="Update" component={UpdateProduct}/>
                <Screen name="Delete" component={DeleteProduct}/>
                <Screen name="Entity" component={Product}/>
            </Navigator>
        </>
    );
}

export default index;