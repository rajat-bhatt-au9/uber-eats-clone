import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  SafeAreaViewBase,
  StatusBar,
} from "react-native";
import HeaderTabs from "./components/HeaderTabs";
import Home from "./screens/Home";

export default function App() {
  return (
    <View style={{ paddingVertical: 40, backgroundColor: "#eee", flex: 1 }}>
      <Home />
    </View>
  );
}
