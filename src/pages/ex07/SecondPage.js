import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from '../../../assets/style';
import Navbar from '../../components/Navbar';

export default function Ex07_2() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.h1} onPress={() => navigation.push('Ex07')}>Second page</Text>
      <StatusBar style="auto" />
      <Navbar/>
    </View>
  );
}
