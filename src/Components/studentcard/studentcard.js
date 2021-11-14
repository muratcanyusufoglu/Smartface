import React from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import styles from './studentcard.style';


const Getstudents=({students})=>
{   

    console.log("asd"+students)
    return(
            <TouchableWithoutFeedback>
            <View style={styles.containerown}>                
    

                    <View style={styles.textbar}>
                    <Text style={styles.title}>{students}</Text>
                                        
                    </View>
                </View>
                </TouchableWithoutFeedback>

    );
    
    
}

export default Getstudents;