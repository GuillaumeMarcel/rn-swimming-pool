import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from '../../../assets/style';
import Navbar from '../../components/Navbar';

export default function Ex08_2({ route }) {
  const navigation = useNavigation();
  const { text } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{text}</Text>
      <Text style={styles.h1} onPress={() => navigation.push('Ex08')}>Previous page {text}</Text>
      <StatusBar style="auto" />
      <Navbar/>
    </View>
  );
}
