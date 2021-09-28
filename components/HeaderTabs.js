import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text='Delivery'
        btncolor='black'
        textcolor='white'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text='Pickup'
        btncolor='white'
        textcolor='black'
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: 900,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
