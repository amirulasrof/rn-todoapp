import React from 'react';
import { Appbar, Button, Text } from 'react-native-paper';

// utils
import { Material } from '../../utils/icons';
import { s, vs, mvs, wp, hp } from '../../utils/responsive';

// theme
import { useTheme } from 'react-native-paper';

const Header = ({
  user,
  setUser,
  mode,
  setMode,
  crudSession
}) => {
  const {colors} = useTheme();
  return (
    <Appbar.Header style={{ backgroundColor: colors.primary, height: s(80) }}>
      <Appbar.Content 
        title="Tasks"
        subtitle={user ? 'Hi, ' + user['Name']: null}
        subtitleStyle={{ fontSize: s(16) }}
      />
      <Appbar.Action
        icon='theme-light-dark' 
        size={s(24)}
        onPress={() => setMode(mode == 'dark' ? 'light' : 'dark')} 
      />
      {/* <Appbar.Action 
        icon="cog-outline" 
        size={s(24)} 
        onPress={() => {}}
      /> */}
      <Appbar.Action 
        icon="logout" 
        size={s(24)} 
        onPress={() => setUser(null)}
      />
    </Appbar.Header>
  );
};

export default Header;


