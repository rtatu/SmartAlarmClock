import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    tableheader:{
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        backgroundColor:"#fff",
        height:50,
        flexDirection:"row",
        marginTop:-10,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        elevation:1,
        shadowColor:"#000",
        shadowOpacity:0.2,
        shadowOffset:{width:0,height:-3}
    },
    header1:{
        fontSize:14,
        fontWeight:"bold",
        marginLeft:25,
        width:60,
        alignSelf:"center",
    },
    header2:{
        fontSize:14,
        fontWeight:"bold",
        flex:2,
        alignSelf:"center"
    },
    header:{
        fontSize:14,
        fontWeight:"bold",
        marginRight:15,
        marginLeft:10,
        flex:1,
        alignSelf:"center"
    },
    addbutton:{
        marginRight:15,
        alignSelf:"center",
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:"#1CA49F",
        justifyContent:"center",
        borderRadius:5
    },
    addtext:{
        color:"#fff",
        fontSize:14
    },
    row:{
        flexDirection:"row",
        paddingVertical:10,
        marginBottom:1,
        alignContent:"center",
        backgroundColor:"#fff",
        borderRadius:10
    },
    text1:{
        fontSize:12,
        marginLeft:25,
        width:60,
        alignSelf:"center"
    },
    text2:{
        fontSize:12,
        flex:2,
        alignSelf:"center"
    },
    text:{
        fontSize:12,
        marginRight:15,
        flex:1,
        alignSelf:"center"
    },
    forward:{
        width:40,
        height:14,
        resizeMode:"contain",
        marginRight:20,
        alignSelf:"center"
    }
})

export default styles