import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";

import AppContextProvider from "./src/contexts/AppContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
    <AppContextProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </AppContextProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",    
  },
});
