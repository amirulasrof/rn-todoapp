import React, { useState, useContext, memo } from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { AreaView } from '../../components';

import { useTheme } from 'react-native-paper';
 
const Auth = () => {

  const {colors} = useTheme()

  return (
    <AreaView>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={100} color={colors.primary}/>
      </View>
    </AreaView>
  )
}

export default Auth;