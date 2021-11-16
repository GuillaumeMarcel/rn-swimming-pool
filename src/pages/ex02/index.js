import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, Alert } from 'react-native';
import styles from '../../../assets/style';
import Navbar from '../../components/Navbar';

export default function Ex02() {
  return (
    <View style={styles.container}>
      <Button  onPress={()=>Alert.alert('Button clicked')}  title="BUTTON"  color="#0088f3" />
      <StatusBar style="auto" />
      <Navbar/>
    </View>
  );
}
