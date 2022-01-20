import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';

// utils
import { Material } from '../../utils/icons';
import { s, vs, mvs, wp, hp } from '../../utils/responsive';

// theme
import { useTheme } from 'react-native-paper';

const Input = ({
  onChangeText, 
  value, 
  placeholder, 
  icon, 
  maxLength,
  handleShowPassword, 
  secureTextEntry,
  error,

}) => {
  
  const { colors } = useTheme();

  return (
    <>
      <TextInput 
        mode='outlined'
        right={icon ? <TextInput.Icon name={icon} color={colors.placeholder} onPress={handleShowPassword}/> : null}
        label={placeholder}
        dense
        error={error}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        underlineColor={colors.backdrop}
        value={value}
        maxLength={maxLength}
        onChangeText={text => onChangeText(text)}
      />
       <HelperText 
        type="error" 
        visible={error}   
        style={{ 
            marginBottom: error ? 1: -10,
            textAlign: 'right'
          }}
        >
          {placeholder} is invalid!
        </HelperText>
    </>
  )
}

export default Input
