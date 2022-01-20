import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Appbar, IconButton } from 'react-native-paper';

// utils
import { Material } from '../../utils/icons';
import { s, vs, mvs, wp, hp } from '../../utils/responsive';


// theme
import { useTheme } from 'react-native-paper';

const Header = ({goBack}) => {
  const {colors} = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: 'transparent' }}>
      <IconButton 
        icon='chevron-left'
        onPress={goBack} 
        color={colors.disabled} 
        size={s(30)}
        style={{ marginLeft: -2}}
      />  

    </Appbar.Header>
  );
};

export default Header;


