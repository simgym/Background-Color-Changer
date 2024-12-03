import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#ffffff");

  const colorChanger = () => {
    const colorChar = "0123456789ABCDEF";

    let newColor = "#";

    for (let i = 0; i < 6; i++) {
      const colorIndex = Math.floor(Math.random() * colorChar.length);
      newColor += colorChar[colorIndex];
    }

    setColor(newColor);
  };

  return (
    <View style={[styles.appContainer, { backgroundColor: color }]}>
      <TouchableOpacity style={styles.button} onPress={colorChanger}>
        <Text style={styles.buttonText}>change color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    paddingVertical: 10,
    paddingHorizontal: 40,
    opacity: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000000",
  },
  buttonText: {
    fontWeight: "bold",
  },
});
