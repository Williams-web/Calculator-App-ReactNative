import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {Colors} from '@/utils/Colors'

const Button = ({title, type, onPress}: {title:string, type: 'top' | 'right' | 'number', onPress?: Function}) => {
  return (
    <TouchableOpacity 
        style={[styles.button,{backgroundColor: type == 'top'? Colors.btnDark : type == 'right' ? Colors.btnRight :  Colors.btnLight}]} 
        onPress={() => onPress && onPress()}>
        <Text style={{fontSize:24,fontWeight:'300', color: type == 'number' ? Colors.black : Colors.white}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
       height: 60,
       width: 60,
       borderRadius: 10,
       padding:10,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: Colors.btnDark
    }
})