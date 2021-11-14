
import {StyleSheet,Dimensions} from "react-native";

const border=Dimensions.get('window');

export default StyleSheet.create({

    background:{
        marginTop:90,
        margin:25,
    
        
    },

    input:{
        borderWidth:1,
        borderRadius:20,
        padding:14,
        margin:1,
    },
    inputtext:{
        marginTop:30,
        padding:3
    },
    logintext:{
        marginBottom:10,
        fontSize:40,
        textAlign:'center',
        
    },
    turnback:{
        marginTop:30,
    },

    entrybutton:{
        padding:10,
        marginHorizontal:border.width/3,
        marginTop:40,
        borderWidth:1,
        borderRadius:15,
        alignItems:'center',
        
    },

    entrytext:{

        
    }

})