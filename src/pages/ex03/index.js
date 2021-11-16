import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../../assets/style';
import Navbar from '../../components/Navbar';

export default function Ex03() {
  const [number, setNumber] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{number}</Text>
      <Button  onPress={()=>setNumber(number+1)}  title="BUTTON"  color="#0088f3" />
      <StatusBar style="auto" />
      <Navbar/>
    </View>
  );
}
