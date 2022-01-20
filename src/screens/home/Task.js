import React from 'react';
import {
  View,
  Animated,
  TouchableOpacity
} from 'react-native';
import { 
  Divider, 
  Subheading, 
  Text, 
  Card, 
  Chip, 
  TouchableRipple,
  Paragraph,
  Headline,
  Title,
  Button,
  IconButton
} from 'react-native-paper';
import moment from 'moment';
import * as Anim from 'react-native-animatable';
import { Swipeable } from 'react-native-gesture-handler';

// utils
import { Material } from '../../utils/icons';
import { s, vs, mvs, wp, hp } from '../../utils/responsive';

// theme
import { useTheme } from 'react-native-paper';

const rightSwipe = (
  progress,
  id,
  deletion
) => {

  // const opacity = dragX.interpolate({
  //   inputRange: [-150, 0],
  //   outputRange: [1, 0],
  //   extrapolate: 'clamp',
  // });

  return (
    <View style={{ 
      width: s(100),
      // padding: 10,
      marginLeft: -20,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
     
      <IconButton 
        onPress={() => deletion(id)}
        icon="delete" 
        size={s(28)}
        color="white"
        style={{ backgroundColor: '#5c6bc0'}}
      />
    </View>
  );
};

const Task = ({
  index,
  value,
  onLongPress,
  deletion
}) => {
  const {colors} = useTheme();

  function delay(index){
    // easing easiest way
    return index * 200
  } 

  return (
 
    <Anim.View
      animation="slideInUp"
      delay={delay(index)}
      useNativeDriver={true}
    >
      <Swipeable renderRightActions={(progress) => rightSwipe(progress, value._id, deletion)} 
        friction={2}
      >
      <Card 
        key={index} 
        style={{ 
          marginVertical: 10, 
          marginHorizontal: 15, 
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          
          elevation: 5
        }}
      >
        
        <TouchableRipple          
          onLongPress={onLongPress}
          onPress={() => {}}
          style={{ padding: 20 }}
          rippleColor={colors.primary}
        >
          <>
            <View style={{ flexDirection: 'row'}}>
              <View style={{ flex: 4 }}> 
                <Headline>{value['title']} </Headline>
              </View>
              <View style={{ flex: 2, alignItems: 'flex-end' }}> 
                <Chip style={{ width: s(96), marginTop: -15, marginRight: -15 }}>
                  <Text> {moment(value['date']).format('DD MMM YYYY')} </Text>
                </Chip>
              </View>
            </View>
            
            <Divider style={{ marginVertical: 5 }}/>
            <Paragraph> {value['description']}  </Paragraph>
          </>
        </TouchableRipple>
      </Card> 
      </Swipeable>
    </Anim.View>
  );
};

export default Task;


