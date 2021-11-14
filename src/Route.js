import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from "react-native-flash-message";
  
import LoginChoose from './Pages/LoginChoose';
import LoginPage from './Pages/LoginPage';
import tHomePage from './Pages/TeacherHomePage';
import sHomePage from './Pages/StudentHomePage';
import ModelStudent from './Pages/sendHomework';
import CheckHomework from './Pages/checkHomework';


const Stack = createStackNavigator();

export default function Route(){

  return(
    <NavigationContainer>
      <FlashMessage position="top"/>
      
      <Stack.Navigator>
        
        <Stack.Screen
        name="LoginChoose"
        component={LoginChoose}
        options={{
          headerShown:false,
        }}
        />

        <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          headerShown:false,
        }}
        />

        <Stack.Screen
        name="tHomePage"
        component={tHomePage}
        options={{
          headerShown:false,
        }}
        />

        <Stack.Screen
        name="sHomePage"
        component={sHomePage}
        options={{
          headerShown:false,
        }}
        />

      <Stack.Screen
        name="sendHomework"
        component={ModelStudent}
        options={{
          headerShown:false,
        }}
        />  
      
      <Stack.Screen
        name="checkHomework"
        component={CheckHomework}
        options={{
          headerShown:false,
        }}d
        /> 
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}