// src/components/Control.tsx
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { useTheme } from "../contexts/ThemeContext";
import ControlFooter from "./ControlFooter";

export default function Control() {
  const app = useAppContext();
  const { palette } = useTheme();

  const handlePrev = () => {
    app.prev();
  };
  const handleNext = () => {
    app.next();
  };

  const buttonColor = palette.background === '#000000' ? '#000000' : palette.color;

  return (
    <>
      <View style={[styles.container, { backgroundColor: palette.background }]}>
        <TouchableOpacity onPress={handlePrev} style={[styles.button, { borderColor: buttonColor }]}>
          <Text style={[styles.buttonText, { color: buttonColor }]}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={[styles.button, { borderColor: buttonColor }]}>
          <Text style={[styles.buttonText, { color: buttonColor }]}>Next</Text>
        </TouchableOpacity>
      </View>
      <ControlFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    margin: 24,
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
