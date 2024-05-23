// src/components/Timeline.tsx
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Timeline() {
  const app = useAppContext();
  const { palette } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <Text style={[styles.text, { color: palette.color }]}>
        Timeline - Track {app.track}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
