import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function CustomHeader() {
  return (
    <View style={{ justifyContent: "center", width: "100%" }}>
      <MaterialIcons
        style={{ alignSelf: "center", marginTop: 10 }}
        name="drag-handle"
        size={30}
        color="#cdcbe1"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
