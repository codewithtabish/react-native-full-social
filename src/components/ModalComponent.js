import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import { height } from '../styles/responsiveSize';


const ModalComponent = ({
    children,
    isVisible=false,
    onBackdropPress=()=>{},
    
    style={}

}) => {
  return (
    <View>
        <Modal
         animationIn="slideInRight"
         animationOut="slideOutRight"
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        style={{...style}}
        >
          {children}
       
      </Modal>
    </View>
  )
}

export default ModalComponent

const styles = StyleSheet.create({})