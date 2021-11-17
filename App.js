// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ex01 from './src/pages/ex01';
import Ex02 from './src/pages/ex02';
import Ex03 from './src/pages/ex03';
import Ex04 from './src/pages/ex04';
import Ex05 from './src/pages/ex05';
import Ex06 from './src/pages/ex06';
import Ex07 from './src/pages/ex07';
import Ex07_2 from './src/pages/ex07/SecondPage';
import Ex08 from './src/pages/ex08';
import Ex08_2 from './src/pages/ex08/SecondPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ex01" component={Ex01} />
        <Stack.Screen name="Ex02" component={Ex02} />
        <Stack.Screen name="Ex03" component={Ex03} />
        <Stack.Screen name="Ex04" component={Ex04} />
        <Stack.Screen name="Ex05" component={Ex05} />
        <Stack.Screen name="Ex06" component={Ex06} />
        <Stack.Screen name="Ex07" component={Ex07} />
        <Stack.Screen name="Ex072" component={Ex07_2} />
        <Stack.Screen name="Ex08" component={Ex08} />
        <Stack.Screen name="Ex082" component={Ex08_2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
