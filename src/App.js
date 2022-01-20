import React from 'react';

import { AreaView } from '../src/components';

// navigator
import DefaultNavigator from './navigators/DefaultNavigator';

// context
import ThemeProvider from './providers/contexts/Theme';
import UserProvider from './providers/contexts/User';
import PaperProvider from './providers/contexts/Paper';
import CrudSessionProvider from './providers/contexts/CrudSession';

const App = () => {
  return(
    <ThemeProvider>
      <PaperProvider>
        <UserProvider>
          <CrudSessionProvider>
            <AreaView>
              <DefaultNavigator />
            </AreaView>     
          </CrudSessionProvider>
        </UserProvider>
      </PaperProvider>
    </ThemeProvider>
  )
}

export default App

