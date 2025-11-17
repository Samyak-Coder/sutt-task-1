import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

export function LeftHeader(){
  return(
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={{margin: 5}}>
      <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft: 20, paddingRight: 5}}>
      <FontAwesome6 name="magnifying-glass" size={23} color="white" />
      </TouchableOpacity>
      </View>
  )
}

export function RightHeader(){
  return(
   <TouchableOpacity style={{margin: 5}}>
   <FontAwesome6 name='add' color='white' size='30'/>
   </TouchableOpacity>
  )
}
