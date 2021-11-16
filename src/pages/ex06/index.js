import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import styles from "../../../assets/style";
import Navbar from "../../components/Navbar";

export default function Ex06() {
  const [destination, setDestination] = useState(null);
  const [destinations, setDestinations] = useState([]);
  return (
    <View style={styles.container}>
      <View style={{ ...styles.header, flexDirection: "row" }}>
        <TextInput
          style={styles.input}
          onChangeText={setDestination}
          value={destination}
          placeholder="Enter a destination"
        />
        <Button
          onPress={() => {
            setDestinations([...destinations, destination]);
            setDestination(null);
          }}
          title="Add"
          color="#bbb"
        />
      </View>
      <View style={styles.body}>
        {destinations && destinations.map((row) => (
          <Text style={{...styles.h1, textDecorationLine: "line-through"}}>{row}</Text>
        ))}
      </View>
      <StatusBar style="auto" />
      <Navbar />
    </View>
  );
}
