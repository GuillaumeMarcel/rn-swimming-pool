import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

import styles from '../../../assets/style';
import Navbar from '../../components/Navbar';
import { geolocalisation, geolocalisationPermissions } from '../../utils/geoloc';

export default function Ex10() {
  const [loc, setLoc] = useState(false);

  async function setLocPermissions() {
    setLoc(await geolocalisationPermissions());
  }

  useEffect(() => {
    if (!loc) {
      setLocPermissions();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Button style={styles.h1} title="Get localisation" />
      <Button style={styles.h1} title="Reset localisation" />
      <StatusBar style="auto" />
      <Navbar/>
    </View>
  );
}
