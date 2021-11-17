import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../../assets/style';
import BurgerButton from '../../components/burgerButton';
import Navbar from '../../components/Navbar';

export default function Ex09() {
  return (
    <View style={styles.container}>
      <BurgerButton />
      <Text style={styles.h1}>Hello !</Text>
      <StatusBar style="auto" />
      <Navbar/>
    </View>
  );
}
