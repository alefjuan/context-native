import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { WebView } from 'react-native-webview';
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { palette, toggleTheme } = useTheme();
  const [url, setUrl] = useState('');
  const [webviewSrc, setWebviewSrc] = useState('');

  const handleButtonPress = () => {
    setWebviewSrc(url);
  };

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <TextInput
        style={[styles.input, { color: palette.color }]}
        placeholder="pesquise seu pedido aq :)"
        placeholderTextColor={palette.color}
        value={url}
        onChangeText={setUrl}
      />

      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Text style={[styles.buttonText, { color: palette.color }]}>ver meu pedido</Text>
      </Pressable>

      {webviewSrc ? (
        <WebView
          source={{ uri: `https://rastreamentocorreios.info/consulta/${webviewSrc}` }}
          style={styles.webview}
        />
      ) : (
        <Text style={[styles.text, { color: palette.color }]}>Visualizador de pedidos</Text>
      )}

      <Pressable onPress={toggleTheme}>
        <Text style={[styles.toggle, { color: palette.color }]}>
          Mudar tema
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
  },
  webview: {
    width: 700,
    height: 400,
    marginTop: 20,
    marginLeft:80,
    borderWidth:2,
  borderColor: "black"
  },
});
