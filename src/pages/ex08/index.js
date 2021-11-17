import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../../assets/style";
import Navbar from "../../components/Navbar";

export default function Ex08() {
  const navigation = useNavigation();
  const [text, setText] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter a text"
      />
      <Text
        style={styles.h1}
        onPress={() => {
          navigation.navigate("Ex082", {
            text,
          });
        }}
      >
        Next page
      </Text>
      <StatusBar style="auto" />
      <Navbar />
    </View>
  );
}
