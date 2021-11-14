import {StyleSheet,Dimensions} from 'react-native';

const border=Dimensions.get("window")

export default StyleSheet.create({

  

 
    bottomtab:{
        fontSize:25,
        flexDirection:'row',
    },

    homeworklist:{
        margin:10,
    },
    topbottom:{
        flexDirection:'row',
        justifyContent:'space-between', 
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
        fontSize:15,
        padding:5,
        
    },

    workappend:{
        flex:2,
    },
    buttonscontent:{
      flexDirection:'row',
        justifyContent: "space-between",
        
    },
    inputtitle:{
        margin:10,
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:60,
        paddingVertical:10,
        shadowColor: "#000",
    },
    
    inputdesc:{
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:35,
        paddingVertical:10,
        shadowColor: "#000",
    },

    inputtime:{
        margin:10,
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:35,
        paddingVertical:10,
        shadowColor: "#000",
    },

    modalView: {
        
        width:border.width,
        marginTop:border.height/3,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
    },

    button: {
        marginTop:10,
        marginHorizontal:60,
        borderRadius: 20,
        padding: 17,
        elevation: 2
    },
      buttonOpen: {
        backgroundColor: "#04e762",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        fontWeight:10,
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        marginTop: 40
      },
})