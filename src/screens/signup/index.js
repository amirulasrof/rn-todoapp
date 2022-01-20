import React, { useState } from 'react';
import { ScrollView, View,} from 'react-native';
import { Title, Caption, Subheading, Button, TouchableRipple } from 'react-native-paper';

// components
import { Dialog, Page, Footer } from '../../components';
import Input from './Input';
import Header from './Header';

// utils
import { s, vs, mvs, wp, hp } from '../../utils/responsive';
import dialogHelper from '../../utils/dialogHelper';

// theme
import { useTheme } from 'react-native-paper';

// provider
import { registerUser } from '../../providers/http/user';

const SignUp = ({navigation}) => {

  /* ----------------------
  Initial State 
  ---------------------- */

  // context
  const {colors} = useTheme();

  const {navigate} = navigation;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(true);

  const [loading, setLoading] = useState(false);

  const [dialogConfig, setDialogConfig] = useState(dialogHelper);

  /* ----------------------
  Function 
  ---------------------- */

  const showDialog = () => setDialogConfig({ ...dialogConfig, visible: true });
  const hideDialog = () => setDialogConfig({ ...dialogConfig, visible: false });

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowPasswordConfirmation = () => setShowPasswordConfirmation(!showPasswordConfirmation);

  const handleRegister = () => {
    setLoading(true);

    if(name && email && password){
      
      registerUser(name, email, password)
      .then(response => {
        const { data, status } = response;

        if(status === 200){
          if(data['code'] === 0){
            setLoading(false);
            // switch stack by storing local login info into context listener
            setDialogConfig({ 
              ...dialogConfig, 
              visible: showDialog,
              // title: '',
              message: data['message'],
              buttonList: [
                { text: 'Ok', onPress: () => {
                  hideDialog();
                  navigation.goBack();
                }},
              ]
            });
          }
          else{
            setLoading(false);
            setDialogConfig({ 
              ...dialogConfig, 
              visible: showDialog,
              // title: '',
              message: data['message'],
              buttonList: [
                { text: 'Ok', onPress: hideDialog },
              ]
            });
            
          }
        }
        else{
          setLoading(false);
          setDialogConfig({ 
            ...dialogConfig, 
            visible: showDialog,
            title: '',
            message: 'Please try again',
            buttonList: [
              { text: 'Ok', onPress: hideDialog },
            ]
          });
        }
      })
      .catch(e => {
        setLoading(false);
        setDialogConfig({ 
          ...dialogConfig, 
          visible: showDialog,
          title: '',
          message: e.message,
          buttonList: [
            { text: 'Ok', onPress: hideDialog },
          ]
        });
      })
    }
    else{
      setDialogConfig({ 
        ...dialogConfig, 
        visible: showDialog,
        title: '',
        message: "Please fill up all information required",
        buttonList: [
          // { text: 'Dismiss', onPress: hideDialog },
          { text: 'Ok', onPress: hideDialog },
        ]
      });
      setLoading(false);
    }
  }

  return (
    <Page>
      <Header goBack={() => navigation.goBack()}/>
      
      {/* Mounted */}
      <Dialog  
        visible={dialogConfig.visible}
        onDismiss={hideDialog}
        title={dialogConfig.title}
        message={dialogConfig.message}
        buttonList={dialogConfig.buttonList}
        dismissable={dialogConfig.dismissable}
      />

      <ScrollView  
        contentContainerStyle={{ 
          padding: 20,
          flexGrow: 1,
          justifyContent: 'center'
        }}
      >
          <Title> To Do App </Title>
          <Subheading style={{ marginBottom: s(20) }}> Sign Up  </Subheading>

          <Input 
            placeholder='Name' 
            value={name} 
            onChangeText={setName}
            maxLength={25}
            error={false}
          />

          <Input 
            placeholder='Email' 
            value={email} 
            onChangeText={setEmail}
            maxLength={25}
            error={false}
          />

          <Input 
            placeholder='Password' 
            value={password} 
            onChangeText={setPassword}
            maxLength={25}
            icon={showPassword ? 'eye-off-outline' :'eye-outline'}
            secureTextEntry={showPassword}
            handleShowPassword={handleShowPassword}
            error={false}
          />

          <Input 
            placeholder='Password Confirmation' 
            value={passwordConfirmation} 
            onChangeText={setPasswordConfirmation}
            maxLength={25}
            icon={showPasswordConfirmation ? 'eye-off-outline' :'eye-outline'}
            secureTextEntry={showPasswordConfirmation}
            handleShowPassword={handleShowPasswordConfirmation}
            error={false}
          />
        
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Button 
              mode="contained" 
              onPress={handleRegister} 
              loading={loading} 
              // style={{ alignSelf: 'center' }}
              labelStyle={{ fontSize: s(12), lineHeight: s(20) }}
            >
              Sign Up
            </Button>
   
        </View>
      </ScrollView>
      {/* <Footer /> */}

    </Page>
  );
}

export default SignUp;