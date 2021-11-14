import {StyleSheet,Dimensions} from 'react-native';

const border=Dimensions.get("window")

export default StyleSheet.create({

    container:{
       flex:1,
       marginTop:border.height/20
        
    },
    topbottom:{
        flexDirection:'row',
        justifyContent:'space-between', 
    },
    
    contentstyle:{
        marginTop:10,
        marginLeft:11,
        borderWidth:1,
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        padding:8,
        borderRadius:7,
    },
    studenttext:{
        marginLeft:9,
        marginTop:5,
        fontSize:15,
        fontWeight:'bold',
    },
    userinfos:{
        marginLeft:11,
        marginTop:21,
        fontSize:15,
        fontWeight:'bold',

    },

    homeworklist:{
        flex:1,
        marginTop:20,
    },

    backhometext:{
        marginLeft:border.width/1.25,
        borderWidth:1,
        marginRight:11,
        fontSize:15,
        fontWeight:'bold',
        borderRadius:4,
    },

    listhomeworksfont:{
        fontWeight:'bold',
        fontSize:25,
        padding:4,
        
    },

    button: {
        marginTop:10,
        marginHorizontal:100,
        borderRadius: 20,
        padding: 7,
        elevation: 2,
        alignItems:'center',
    },
      buttonOpen: {
        backgroundColor: "#04e762",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle:{
          fontWeight:'bold',
      }

})