// src/pages/Home.tsx
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Timeline from "../components/Timeline";
import Control from "../components/Control";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { palette, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <Text style={[styles.text, { color: palette.color }]}>
        Home - Music Player
      </Text>

      <Timeline />
      <Control />

      <Text style={[styles.toggle, { color: palette.color }]} onPress={toggleTheme}>
        Mudar tema
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  toggle: {
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
