import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
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
            <SafeAreaView>
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
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex10')} ><Text>ex10</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex11')} ><Text>ex11</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex12')} ><Text>ex12</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex13')} ><Text>ex13</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex14')} ><Text>ex14</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('Ex15')} ><Text>ex15</Text></TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      )}
    </>
  );
}
