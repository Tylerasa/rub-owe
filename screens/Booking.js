import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Calendar from 'react-native-ep-calendar'

// let markedDates = [
//     {
//       date: new Date(Date.now()),
//       markerType: 'myMarker'
//     },
//   ];

//   let markerTypes = [
//     {
//       markerType: 'myMarker',
//       markerTextStyle: {color: 'red'}.
//       markerTouchableStyle = {backgroundColor: 'transparent'},
//       markerColumnStyle = null
//     },
//   ];

export default function Booking() {
    return (
        <View>
               <Calendar
                //   markerTypes={[missMarker]}
                //   markedDates={[...checkedMarker, ...missedMarkers]}
                  darkTheme={{
                    markerColor: "#ff00ff",
                    markerTextColor: "#224009",
                  }}
                  lightTheme={{
                    markerColor: "#ff00ff",
                    markerTextColor: "#224009",
                  }}
                //   onMonthChangeListener={(
                //     previousMonth,
                //     previousYear,
                //     month,
                //     year,
                //   ) => {
                //     getTimelineData(
                //       habit,
                //       month,
                //       year,
                //       setCheckedMarker,
                //       setMissedMarker,
                //     );
                //   }}
                />  
        </View>
    )
}

const styles = StyleSheet.create({})
