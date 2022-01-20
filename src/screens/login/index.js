import React, { useState, useContext, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Title, Caption, Subheading, Button, TouchableRipple, IconButton, Divider } from 'react-native-paper';

// components
import { Dialog, Page, Footer } from '../../components';
import Input from './Input';

// contexts
import { UserContext } from '../../providers/contexts/User';
import { ThemeContext } from '../../providers/contexts/Theme';

// utils
import { Material } from '../../utils/icons';
import { s, vs, mvs, wp, hp } from '../../utils/responsive';
import dialogHelper from '../../utils/dialogHelper';

// theme
import { useTheme } from 'react-native-paper';

import { login } from '../../providers/http/user';

const Login = ({
  navigation
}) => {

  /* ----------------------
  Initial State 
  ---------------------- */

  // context
  const {user, setUser} = useContext(UserContext);
  const {mode, setMode} = useContext(ThemeContext);

  const {colors} = useTheme();

  const {navigate} = navigation;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const [loading, setLoading] = useState(false);

  const [dialogConfig, setDialogConfig] = useState(dialogHelper);

  /* ----------------------
  Function 
  ---------------------- */

  const showDialog = () => setDialogConfig({ ...dialogConfig, visible: true });
  const hideDialog = () => setDialogConfig({ ...dialogConfig, visible: false });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = () => {
    setLoading(true);

    if(email && password){
      login(email, password)
      .then(response => {
        const { data, status } = response;

        if(status === 200){
          if(data['code'] === 0){
            setLoading(false);
            // switch stack by storing local login info into context listener
            setUser(data['data']);      
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
        title: 'Invalid credentials',
        message: "Please fill up all information required",
        buttonList: [
          { text: 'Ok', onPress: hideDialog },
        ]
      });
      setLoading(false);
    }
  }

  return (
    <Page>
      
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
          justifyContent: 'center',
        }}
      >
        <IconButton 
          icon='theme-light-dark' 
          onPress={() => setMode(mode == 'dark' ? 'light' : 'dark')} 
          color={colors.disabled} 
          size={s(28)}
          style={{ alignSelf: 'flex-end' }}
        />

          <Title> To Do App </Title>
          <Subheading style={{ marginBottom: s(20) }}> Login to continue </Subheading>
   
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
        
          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Button 
              mode="contained" 
              onPress={handleLogin} 
              loading={loading} 
              labelStyle={{ fontSize: s(12), lineHeight: s(20) }}
            >
              Login
            </Button>

            <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
              <Divider style={{ width: '46%' }}/>
              <Text style={{ width: '8%', color: colors.placeholder }}> Or </Text>
              <Divider style={{ width: '46%'  }}/>
            </View>

              <Button 
                mode='text'
                onPress={() => navigate('signup')} 
                loading={false} 
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

export default Login;