import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigation'

class App extends React.Component{

  render(){
    return(
      <View>
        <DrawerNavigator />
      </View>
    )
  }

}