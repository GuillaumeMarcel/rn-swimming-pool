import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../assets/style";
import { useNavigation } from "@react-navigation/native";

export default function BurgerButton() {
    const navigation = useNavigation();

  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.burgercontainer}
        onPress={() => setOpen(true)}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/56/56763.png",
          }}
        />
      </TouchableOpacity>
      {open && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.burgercontainer}
            onPress={() => setOpen(false)}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/271/271203.png",
              }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex01')} ><Text>ex01</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex02')} ><Text>ex02</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex03')} ><Text>ex03</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex04')} ><Text>ex04</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex05')} ><Text>ex05</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex06')} ><Text>ex06</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex07')} ><Text>ex07</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex08')} ><Text>ex08</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex09')} ><Text>ex09</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex010')}><Text>ex010</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex011')}><Text>ex011</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex012')}><Text>ex012</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex013')}><Text>ex013</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex014')}><Text>ex014</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex015')}><Text>ex015</Text></TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
    </>
  );
}
