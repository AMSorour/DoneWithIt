
import * as React from 'react';
import { Text, View,StyleSheet, Button } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';



const HomeScreen = ({navigation}) => {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Home Screen</Text>
        <Button title='Details Page' onPress={() => navigation.navigate("Details")}/>
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Details Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   
  }

})

