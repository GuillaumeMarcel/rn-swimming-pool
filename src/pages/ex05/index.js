import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "../../../assets/style";
import Navbar from "../../components/Navbar";

export default function Ex05() {
  return (
    <View style={{...styles.container, alignItems: 'flex-start'}}>
      <View style={{width: '100%'}}> 
      <SafeAreaView>
        <ScrollView style={{marginBottom: 40}}>
          
          {[1, 2, 3, 4, 5, 7, 8, 9, 10].map(() => (
            <>
              <View style={styles.view1}></View>
              <View style={styles.container2}>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
                <View style={styles.view2}></View>
              </View>
            </>
          ))}
        </ScrollView>
      </SafeAreaView>
          </View>
      <StatusBar style="auto" />
      <Navbar />
    </View>
  );
}
