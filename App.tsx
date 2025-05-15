import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, ScrollView, SafeAreaView } from "react-native";
import Login from "./src/screen/Login";
import Home from "./src/screen/Home";
import SignUp from "./src/screen/SignUp";
import IndexPage from "./src/screen";
import TodoList from "./src/screen/todoList";

export default function App() {
const name="Phu";
const age=15;

  return (
    <SafeAreaView style={styles.container}>
      <TodoList/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  }
});

