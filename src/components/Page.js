import React from 'react'
import { StatusBar, Platform, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useTheme, Provider } from 'react-native-paper';

const StatusTopBar = () => {
  const {colors} = useTheme();
  // 44 - on iPhoneX
  // 20 - on iOS device
  // X - on Android platfrom (runtime value)
  // 0 - on all other platforms (default)
  // console.log(getStatusBarHeight());

  // will be 0 on Android, because You pass true to skipAndroid
  // console.log(getStatusBarHeight(true));

  if(Platform.OS == 'android'){
    return <StatusBar backgroundColor={colors.primary} barStyle='light-content'/>
  }
  else if(Platform.OS == 'ios') {
    return <View style={{ backgroundColor: colors.primary, height: getStatusBarHeight(true) }}>
        <StatusBar barStyle='light-content'/>
    </View>
  
  }
}

export const Page = ({children}) => {
  const {colors} = useTheme();

  return <View 
    style={{ 
      flex: 1, 
      backgroundColor: colors.background, 
    }}
  >
    <StatusTopBar />
      {children}
  </View> 
}