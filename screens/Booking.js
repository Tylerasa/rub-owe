import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import SwipeButton from 'rn-swipe-button';
export default function Booking() {
  return (
    <View>
      <Calendar
        markedDates={{
          "2012-05-16": { selected: true, marked: true, selectedColor: "blue" },
          "2012-05-17": { marked: true },
          "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2012-05-19": { disabled: true, disableTouchEvent: true },
        }}
      />
       <SwipeButton
            // enableReverseSwipe
            // onSwipeSuccess={() => updateSwipeStatusMessage('Slide success!')}
            railBackgroundColor="#a493d6"
            thumbIconBackgroundColor="#FFFFFF"
            title="Slide to unlock"
          />
    </View>
  );
}

const styles = StyleSheet.create({});
