import React from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';

    const renderhomeworks=({contentdata})=>{
    
       return( <TouchableWithoutFeedback >
        <View style={styles.containerown}>                
        

                <View style={styles.textbar}>
                <Text style={styles.title}>HomeWork for class : {contentdata.title}</Text>
                
                <View style={styles.bottom}>                        
                <Text style={styles.category}>{contentdata.description}</Text>
                <Text style={styles.price}>Who Send: {contentdata.name}</Text>
                </View>
                
                </View>
            </View>
            </TouchableWithoutFeedback>
       )
    }
    export default renderhomeworks;