import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../assets/style';
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
    const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <Text onPress={() => navigation.push('Ex01')}>ex01</Text>
      <Text onPress={() => navigation.push('Ex02')}>ex02</Text>
      <Text onPress={() => navigation.push('Ex03')}>ex03</Text>
      <Text onPress={() => navigation.push('Ex04')}>ex04</Text>
      <Text onPress={() => navigation.push('Ex05')}>ex05</Text>
      <Text onPress={() => navigation.push('Ex06')}>ex06</Text>
      <Text onPress={() => navigation.push('Ex07')}>ex07</Text>
      <Text onPress={() => navigation.push('Ex08')}>ex08</Text>
      <Text onPress={() => navigation.push('Ex09')}>ex09</Text>
    </View>
  );
}
