import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../../../assets/style";
import Navbar from "../../components/Navbar";

export default function Ex04() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1white}>Header</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello</Text>
        <Image
        style={styles.logo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
      </View>
      <View style={styles.footer}><Text>Footer</Text></View>
      <StatusBar style="auto" />
      <Navbar />
    </View>
  );
}
