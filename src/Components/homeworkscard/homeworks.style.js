import { StyleSheet,Dimensions } from "react-native";

const border=Dimensions.get("window")

export default StyleSheet.create({

  
    
    containerown:{
        height:border.height/11,
        flexDirection:'row',        
        backgroundColor:'#04e762',
        margin:10,
        borderWidth:1,
        borderColor:'#bdbdbd',
        borderRadius:10,
                
    },
    containerelse:{
        height:border.height/11,
        flexDirection:'row',        
        backgroundColor:'#ef233c',
        margin:10,
        borderWidth:1,
        borderColor:'#bdbdbd',
        borderRadius:10,

    },

    title:{
        fontSize:17,
        fontWeight:'500',
        textAlign:'auto',

    },
    backhometext:{
        marginTop:20,
        marginLeft:border.width/1.25,
        borderWidth:1,
        marginRight:11,
        fontSize:15,
        fontWeight:'bold',
        borderRadius:4,
    },
    
    
    
    textbar:{
    marginLeft:5,
    flex:2,
    justifyContent:'space-between',
    
    
    },

    bottom: {
        flexDirection:'row',
        justifyContent:'space-between'        
        
    },

    price:{
        textAlign:'right',
        marginRight:4,
           
       
    },

    category:{
        textAlign:'left',     
        
        
        
    }

})