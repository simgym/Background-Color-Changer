import {
  Image,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import App from "../App";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/*SafeAreaView compatible with IOS only right now*/}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <App />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures SafeAreaView covers the full screen
  },
  scrollView: {
    flexGrow: 1, // Ensures ScrollView takes up available space
    justifyContent: "center",
    alignItems: "center",
  },
});
