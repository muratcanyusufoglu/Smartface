import React,{useState} from 'react';
import {View, TextInput, TouchableOpacity,Text} from 'react-native';
import { showMessage } from "react-native-flash-message";

import styles from './Login.style';
import { auth } from '../../../firebase';

const login=({navigation})=>{
    
    const[userid,setUserid]=useState('')
    const[password,setPassword]=useState('')

    const firstpage=()=>{
        return navigation.navigate('LoginChoose')
    }
    
    async function handleSignUp() {
        try{
        await auth.signInWithEmailAndPassword(userid,password)
        
        showMessage({
            message:"Login Succesfull",
            type:"success"
        })
        
        const name=userid.split(/[@,.]/);

        if(name[1]=="gmail"){
        navigation.navigate('tHomePage')
        }
        
        else{
        navigation.navigate('sHomePage')
        }
        }

        catch(error){showMessage({
            message:error.message,
            type:"danger",
        })}
    }; 
       
    
    return( 
        <View>
            <Text style={styles.turnback} onPress={firstpage}>Back</Text>
        <View style={styles.background}>
            
            <Text style={styles.logintext}>Login Page</Text> 
            <Text style={styles.inputtext}>Administor Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={text=>setUserid(text)}
            placeholder="Please entry user id..."
            />
            
            <Text style={styles.inputtext}>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={text=>setPassword(text)}
            placeholder="Please entry password..."
            />
            
            <TouchableOpacity
            style={styles.entrybutton}
            onPress={handleSignUp}
            >
            <Text style={styles.entrytext}>Login</Text>
            </TouchableOpacity>

             </View>
             </View>
    );
}
export default login;