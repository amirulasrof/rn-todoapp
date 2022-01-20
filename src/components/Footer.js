import React, { useContext } from 'react';
import { View } from 'react-native';
import { useTheme, Text, TouchableRipple } from 'react-native-paper';

// context
import { CrudSessionContext } from '../providers/contexts/CrudSession';

// utils
import { Material } from '../utils/icons';
import { s, vs, mvs, wp, hp } from '../utils/responsive';

function Footer(props){
  
  const {crudSession, setCrudSession} = useContext(CrudSessionContext)
  const {colors} = useTheme();
  
  return(
    <TouchableRipple 
      onPress={() => {}} 
      style={{ 
        padding: 5, 
        alignItems: 'center' 
        }}
      >
      <Text style={{ fontSize: s(12), color: colors.disabled }}> {crudSession} </Text>
    </TouchableRipple>
  )
}

export default Footer;
