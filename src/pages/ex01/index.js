import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../../assets/style';
import Navbar from '../../components/Navbar';

export default function Ex01() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hello !</Text>
      <StatusBar style="auto" />
      <Navbar/>
    </View>
  );
}
