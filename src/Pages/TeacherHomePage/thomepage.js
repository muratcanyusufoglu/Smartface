import React,{useEffect,useState}from 'react';
import {Text,View,FlatList,Pressable} from 'react-native';
import styles from './thomepage.style';

import Getstudents from '../../Components/studentcard';
import Gethomeworks from '../../Components/listcard';

import parseContentData from '../../utils/parseContentData';

import Modelview from '../../Components/Model';

import { auth } from '../../../firebase';
import { db } from '../../../firebase';


export default function thomepage({navigation}){
    

    const [contentlist,setContentlist]=useState([])
    const [studentdata,setStudentdata]=useState([])
    const [homeworksdata,setHomeworksdata]=useState([])
    

    const cuser=auth.currentUser.email;
    
    const name=cuser.split('@')[0]
    console.log(name)       

    useEffect(()=>{
        db.ref(`teacher/${name}/`).on('value',snapshot=>
        {const contentdata=snapshot.val()
        setContentlist(contentdata)
        });
        
        db.ref(`students/class${contentlist.class}/`).on('value',snapshot=>
        {
        const studentdata=snapshot.val()
        setStudentdata(studentdata)
        });

        db.ref('homeworks').on('value',snapshot=>{
        const homeworksdata=snapshot.val()
        const parsedata=parseContentData(homeworksdata);
        setHomeworksdata(parsedata) 
        })
    
    },[])

    function logout(){
        return navigation.navigate('LoginPage')
    }

    const renderhomeworks=({item})=>
        <Gethomeworks homeworks={item} classinfo={contentlist.class}
        />;

    const renderstudents=({item})=>
        <Getstudents  students={item}
        />;
    
    const checkhomework=()=>{
            return navigation.navigate("checkHomework");
        }
    


    return(     
        <View style={styles.container}>
        
        <Text
        onPress={logout}
        style={styles.backhometext}
        >Log out</Text>

        <Text style={styles.userinfos}>Teacher Infos:</Text>   

        <View style={styles.topbottom}>
        <View>
        
        <Text style={styles.contentstyle}>Name: {contentlist.name}</Text>
        <Text style={styles.contentstyle}>Class: {contentlist.class}</Text>
        <Text style={styles.contentstyle}>Email: {contentlist.email}</Text>
        </View>
        <Text style={styles.userinfos}>Reds is other {"\n"}teachers homeworks.</Text>
        
        </View>

        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={checkhomework}
            >
            <Text style={styles.textStyle}>Check Homeworks</Text>
        </Pressable>

        <View style={styles.homeworklist}>
        
        
        <FlatList
        data={homeworksdata}
        renderItem={renderhomeworks}
        ListHeaderComponent={() => (
            <View style={styles.homeworklist}>
        <Text style={styles.listhomeworksfont}>Students:</Text>
        
        <Text style={styles.studenttext}>{"\n"}{studentdata}</Text>
        
        
        <Text style={styles.listhomeworksfont}>HomeWorks:</Text>
        <Modelview />
        </View>)}
        
        />
        
     </View>

        </View>
    );

}

