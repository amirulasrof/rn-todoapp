import React, { useContext, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useTheme } from 'react-native-paper';

function AreaView(props){
  const {colors} = useTheme();
  
  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      {props.children}
    </SafeAreaView>
  )
}

export default AreaView;
