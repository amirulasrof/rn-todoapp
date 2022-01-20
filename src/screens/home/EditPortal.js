import React from 'react';
import { View } from 'react-native';
import { 
  Headline, 
  Modal, 
  Portal, 
  Subheading, 
  Text, 
  Divider, 
  TextInput, 
  Caption,
  Button 
} from 'react-native-paper';

const AddPortal = ({
  id,
  title,
  setTitle,
  description,
  setDiscription,
  onPress,
  loading,
}) => {
  return (
    <View>
      <Headline> Edit Task </Headline>
      <Caption> Task Id : {id} </Caption> 
      <Divider style={{ marginVertical: 10 }} />
      <TextInput 
        mode='outlined'
        label='Title'
        dense
        value={title}
        maxLength={50}
        onChangeText={text => setTitle(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput 
        mode='outlined'
        label='Description'
        dense
        value={description}
        maxLength={50}
        onChangeText={text => setDiscription(text)}
        style={{ marginBottom: 20 }}
      />

      <Button 
        onPress={() => title && description ? onPress() : {}}
        loading={loading} 
      >
        Update Task
      </Button>
    </View>
  );
};

export default AddPortal;