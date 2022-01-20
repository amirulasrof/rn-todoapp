import React from 'react';
import { FAB, Button, Text } from 'react-native-paper';
import * as Anim from 'react-native-animatable';
import { useTheme } from 'react-native-paper';

const Fab = ({onPress}) => {
  const {colors} = useTheme();

  return (
    <Anim.View
      animation="zoomIn"
      // delay={500}
      // duration={15000}
      useNativeDriver={true}
      style={{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 10, // https://github.com/callstack/react-native-paper/issues/188
      }}
    >
      <FAB
        icon="plus"
        onPress={onPress}
        label="Add Task"
        style={{ backgroundColor: colors.primary }}
      />
    </Anim.View>
  );

}
  


export default Fab;