import React from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import styles from './listcard.style';


const Gethomeworks=({homeworks,classinfo,onpress})=>
{   

    if(homeworks.class===classinfo){   
    return(
            <TouchableWithoutFeedback onPress={onpress}>
            <View style={styles.containerown}>                
    

                    <View style={styles.textbar}>
                    <Text style={styles.title}>HomeWork for class {classinfo}: {homeworks.title}</Text>
                    
                    <View style={styles.bottom}>                        
                    <Text style={styles.category}>{homeworks.description}</Text>
                    <Text style={styles.price}>last time: {homeworks.lastsend}</Text>
                    </View>
                    
                    </View>
                </View>
                </TouchableWithoutFeedback>

    );
    }
    else{
        return(
        <TouchableWithoutFeedback>
            <View style={styles.containerelse}>                
    

                    <View style={styles.textbar}>
                    <Text style={styles.title}>HomeWork for Class {homeworks.class}: {homeworks.title}</Text>
                    
                    <View style={styles.bottom}>                        
                    <Text style={styles.category}>{homeworks.description}</Text>
                    <Text style={styles.price}>last time: {homeworks.lastsend}</Text>
                    </View>
                    
                    </View>
                </View>
                </TouchableWithoutFeedback>
        );

    }
}

export default Gethomeworks;