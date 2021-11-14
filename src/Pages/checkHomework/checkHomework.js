import React,{useEffect,useState} from 'react';
import {View,Text,TouchableWithoutFeedback,FlatList} from 'react-native';
import styles from './checkhomework.style';
import Gethomework from '../../Components/homeworkscard';

import { auth } from '../../../firebase';
import { db } from '../../../firebase';

const checkhomeworks=()=>
{   
    const [contentdata,setContentdata]=useState([])

    const userclass=auth.currentUser.class;
    

    useEffect(()=>{
        db.ref(`submithomeworks/`).on('value',snapshot=>
        {const contentdata=snapshot.val()
        setContentdata(contentdata)
        });
    
    },[])
    const back=()=>{
        return navigation.navigate('tHomePage')
    }

    const renderhomeworks=({item})=>
        <Gethomework contentdata={item}
        />;
 

    return(
        <View>
            
            <Text
            onPress={back}
            style={styles.backhometexts}
            >Back</Text>

            <FlatList
            data={contentdata}
            renderItem={renderhomeworks}
          
           />
           </View>

    );
  
}

export default checkhomeworks;