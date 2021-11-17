// In App.js in a new project

import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  geolocalisationPermissions,
  geolocalisation,
} from "./src/utils/geoloc";

import Ex01 from "./src/pages/ex01";
import Ex02 from "./src/pages/ex02";
import Ex03 from "./src/pages/ex03";
import Ex04 from "./src/pages/ex04";
import Ex05 from "./src/pages/ex05";
import Ex06 from "./src/pages/ex06";
import Ex07 from "./src/pages/ex07";
import Ex07_2 from "./src/pages/ex07/SecondPage";
import Ex08 from "./src/pages/ex08";
import Ex08_2 from "./src/pages/ex08/SecondPage";
import Ex09 from "./src/pages/ex09";
import Ex10 from "./src/pages/ex10";

const Stack = createNativeStackNavigator();

function App() {
  const [loc, setLoc] = useState(false);

  async function setLocPermissions() {
    setLoc(await geolocalisationPermissions());
  }

  useEffect(() => {
    if (!loc) {
      setLocPermissions();
    }
  }, []);

  if (loc) {
    geolocalisation();
  }
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
        <Stack.Screen name="Ex09" component={Ex09} />
        <Stack.Screen name="Ex10" component={Ex10} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
