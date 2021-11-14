import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';




export default function App({navigation}) {

    const loginpage=()=>{
        return navigation.navigate('LoginPage')
    }
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
      onPress={loginpage}
      style={styles.logincontainer}>
        <Text>Teacher Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={loginpage}
      style={styles.logincontainer}>
        <Text>Student Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logincontainer:{
    borderWidth:1,
    padding:20,
    margin:15,
    borderRadius:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
