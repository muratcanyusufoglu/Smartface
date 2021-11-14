import React,{useEffect,useState}from 'react';
import {Text,View,FlatList} from 'react-native';
import styles from './shomepage.style';

import Gethomeworks from '../../Components/listcard';

import parseContentData from '../../utils/parseContentData';

import { auth } from '../../../firebase';
import { db } from '../../../firebase';
import { PickerItem } from 'react-native/Libraries/Components/Picker/Picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function shomepage({navigation}){
    

    const [contentlist,setContentlist]=useState([])
    const [studentdata,setStudentdata]=useState([])
    const [homeworksdata,setHomeworksdata]=useState([])
    

    const cuser=auth.currentUser.email;
    const name=cuser.split('@')[0]
    
    
    useEffect(()=>{
        db.ref(`student/${name}/`).on('value',snapshot=>
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
    
    const getmodel=item=>
    { return navigation.navigate('sendHomework',{item})}
    

    const renderhomeworks=({item})=>
        <Gethomeworks homeworks={item} classinfo={contentlist.class} onpress={()=>getmodel(contentlist.class)} 
        />;
    
    
    

    return(     
        <View style={styles.container}>
        
        <Text
        onPress={logout}
        style={styles.backhometext}
        >Log out</Text>

        <Text style={styles.userinfos}>Student Infos:</Text>   

        <View style={styles.topbottom}>
        <View>
        
        <Text style={styles.contentstyle}>Name: {contentlist.name}</Text>
        <Text style={styles.contentstyle}>Teacher: {contentlist.teacher}</Text>
        <Text style={styles.contentstyle}>Class: {contentlist.class}</Text>
        <Text style={styles.contentstyle}>Email: {contentlist.email}</Text>
        </View>

        <Text style={styles.userinfos}>Greens are your {"\n"}homeworks.Touch {"\n"}and write homework.</Text>
        
        </View>

        <View style={styles.homeworklist}>
        
        
        <FlatList
        data={homeworksdata}
        renderItem={renderhomeworks}
        ListHeaderComponent={() => (
         <View style={styles.homeworklist}>
        <Text style={styles.listhomeworksfont}>Class Friends:</Text>
        
        <Text style={styles.studenttext}>{"\n"}{studentdata}</Text>
        
        <Text style={styles.listhomeworksfont}>HomeWorks:</Text>
        </View>)}
        
        />
        
        
        </View>

        </View>
    );

}

