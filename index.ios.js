//index.ios.js this file is for the IOS CODE of the application

//Import library to help render a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js'

//Create a component

const App = () => {

    return (
        <View>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

//Render the component to the device.
//hey react native register App components to the project albums. Atleast one component needs to be rendered for the App
AppRegistry.registerComponent('albums', () => App);