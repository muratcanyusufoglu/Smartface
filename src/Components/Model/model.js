import React,{useEffect,useState}from 'react';
import {Text,View,FlatList,TextInput, Modal, Pressable} from 'react-native';
import { showMessage } from "react-native-flash-message";

import styles from './model.style';


import { db } from '../../../firebase';

const model=()=>{
    
    const [modalVisible, setModalVisible] = useState(false);
    
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')
    const [lasttime, setLasttime]=useState('')


    async function sendhomeworkfunc(){

        const homeworkobject={
            class:contentlist.class,
            title:title,
            description:description,
            lastsend:lasttime,
        };
        try{
        
        await db.ref('homeworks/').push(homeworkobject);
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
    
    return(
    <View style={styles.workappend}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose
        >
        <View style={styles.centeredViesw}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>New Homework</Text>
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
            <TextInput
            style={styles.inputtime} 
            onChangeText={setLasttime}
            placeholder="Last time sending..."
            />
            <View style={styles.buttonscontent}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{sendhomeworkfunc(); setModalVisible(!modalVisible); }}
            >
            <Text style={styles.textStyle}>Send</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{ setModalVisible(!modalVisible); }}
            >
            <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            </View>
          </View>{}
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Give a New Homework</Text>
      </Pressable>
    </View>
    );
};
export default model;   