import React,{useEffect,useState}from 'react';
import {Text,View,FlatList,TextInput, Modal, Pressable} from 'react-native';
import { showMessage } from "react-native-flash-message";

import * as ImagePicker from 'expo-image-picker';
import styles from './model.style';


import { db } from '../../../firebase';

const model=({navigation})=>{

    const [modalVisible, setModalVisible] = useState(false);
    
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const [lasttime, setLasttime]=useState('')
    const [classinfo,setClassinfo]=useState('')
    const [sendperson,setSendperson]=useState('')


    async function sendhomeworkfunc(){

        const homeworkobject={
            name:sendperson,
            class:classinfo,
            title:title,
            description:description,
            lastsend:lasttime,
        };
        try{
        
        await db.ref('submithomeworks/').push(homeworkobject);
        showMessage({
            message:"Send Process Succesfull",
            type:"success"
        })
        }
        
        catch(error){
            showMessage({
                message:"Send Process Failed",
                type:"danger"
            })
        }
        setTitle('');
        setDescription('');
        setLasttime('');
    }

    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });d

        console.log(result);

        if (!result.cancelled) {
        setImage(result.uri);
    }
    }
  
    
    return(

    <View style={styles.workappend}>
    
        <View style={styles.centeredViesw}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Submit Homework</Text>
            <TextInput
            style={styles.inputtitle}  
            onChangeText={setClassinfo}
            placeholder="Give a your class info..."  
            />

            <TextInput
            style={styles.inputtitle}  
            onChangeText={setSendperson}
            placeholder="Give a your name..."  
            />    

            <TextInput
            style={styles.inputtitle}  
            onChangeText={setTitle}
            placeholder="Give a title..."  
            />

            <TextInput  
            style={styles.inputdesc} 
            onChangeText={setDescription}
            placeholder="Give a description..."
            />
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={pickImage}
            >
            <Text style={styles.textStyle}>Add Photo</Text>
            </Pressable>
            <View style={styles.buttonscontent}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{sendhomeworkfunc(); setModalVisible(!modalVisible); }}
            >
            <Text style={styles.textStyle}>Send</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{ setModalVisible(!modalVisible); navigation.navigate('sHomePage')}}
            >
            <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            </View>
          </View>
        </View>
      

      
    </View>
    );
};
export default model;   