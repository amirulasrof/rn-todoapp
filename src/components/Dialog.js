import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const DialogComponent = ({onDismiss, visible, title, message, buttonList, dismissable}) => {
  return (
    <Portal>
      <Dialog 
        visible={visible} 
        onDismiss={onDismiss}
        dismissable={dismissable}
      >
        {title ?
          <Dialog.Title>{title}</Dialog.Title>
          :
          null
        } 
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>

        <Dialog.Actions>
          <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
            {
              buttonList ? 
                buttonList.map((val, i) => 
                  <Button key={i} onPress={val.onPress}> {val.text} </Button>
                )
                :
                <Button onPress={onDismiss}> Ok </Button>
            } 

          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogComponent;