import React from 'react';
import {
  View
} from 'react-native';
import { 
  Divider, 
  Subheading, 
  Text, 
  Card, 
  Chip, 
  TouchableRipple,
  IconButton,
  Paragraph,
  Headline,
  Title
} from 'react-native-paper';
import moment from 'moment';
import * as Anim from 'react-native-animatable';

// utils
import { Material } from '../../utils/icons';
import { s, vs, mvs, wp, hp } from '../../utils/responsive';

// theme
import { useTheme } from 'react-native-paper';

const AddCenter = ({
  onPress
}) => {
  const {colors} = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Headline> No Task Added </Headline>
      <Anim.View
        animation="wobble"
        // delay={500}
        // duration={15000}
        useNativeDriver={true}
      >
      <IconButton
        icon="plus"
        color={'white'}
        size={s(40)}
        style={{ backgroundColor: colors.primary }}
        onPress={onPress}
      />
      </Anim.View>
    </View> 
  );
};

export default AddCenter;


