import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import SwipeButton from "rn-swipe-button";
export default function Booking() {
  return (
    <View style={{ flex: 1 }}>
      <Calendar
        theme={{
          backgroundColor: "#212957",
          calendarBackground: "#212957",
          dayTextColor: '#eee',
          textSectionTitleColor: "#fff"
        }}
        markedDates={{
          "2021-12-27": { selected: true, marked: true, selectedColor: "#31b9ff" },
          "2021-12-28": {  selected: true, marked: true, selectedColor: "#31b9ff" },
          "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2012-05-19": { disabled: true, disableTouchEvent: true },
        }}
      />
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 20,
            justifyContent: "space-between",
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              width: "50%",

              paddingRight: 5,
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: 18,
                marginBottom: 5,
                color: "#212957",
              }}
            >
              Date:
            </Text>
            <Text style={{ textAlign: "left", fontSize: 18 }}>
              20-21 June 2021
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              borderLeftColor: "#eee",
              borderLeftWidth: 2,
              paddingLeft: 20,
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: 18,
                marginBottom: 5,
                color: "#212957",
              }}
            >
              Tickets:
            </Text>
            <Text style={{ textAlign: "left", fontSize: 18, marginBottom: 5 }}>
              2 Premium Tickets
            </Text>
          </View>
        </View>
        <SwipeButton
          // enableReverseSwipe
          // onSwipeSuccess={() => updateSwipeStatusMessage('Slide success!')}
          railBackgroundColor="#e6f4ff"
          railBorderColor="#e6f4ff"
          thumbIconBackgroundColor="#383f85"
          thumbIconBorderColor= "#383f85"
          title="Swipe to confirm"
          style={{fontSize: "16px"}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
