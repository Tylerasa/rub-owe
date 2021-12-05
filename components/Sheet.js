import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Sheet() {
  let diving = ["Solo Diving", "Team Diving", "Family Diving"];
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text
        style={{
          fontSize: 30,
          color: "#212957",
          fontFamily: "bold",
          paddingTop: 20,
        }}
      >
        Click the diving features you want
      </Text>
      <Text
        style={{
          color: "#212957",
        }}
      >
        Choose the type of diving you want to enjoy later
      </Text>
      <View style={{ marginTop: 30 }}>
        {diving.map((ele, i) => {
          return (
            <View
              key={i}
              style={{
                height: 120,
                backgroundColor: i==0? "#97D0EF": i==1 ? "#F2F4FA" : "#ffeee7",
                borderRadius: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                marginBottom: 20,
              }}
            >
              <View>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    marginRight: 10,
                    borderRadius: 80,
                  }}
                  source={require("../assets/images/snorkel.jpg")}
                />
              </View>
              <Text
                style={{
                  flex: 1,
                  flexWrap: "wrap",
                  height: 80,
                  color: "#212957",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginBottom: 20,
                    color: "#212957",
                  }}
                >
                  Solo Diving
                </Text>{" "}
                {"\n"} {"\n"}
                Lorem ipsum dolor sit Lorem ipsum dolor sit
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 20,
    backgroundColor: "white",
  },
});
