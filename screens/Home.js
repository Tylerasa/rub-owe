import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const DATA = [
  {
    id: "1",
    title: "Day Diving",
  },
  {
    id: "2",
    title: "Night Diving",
  },
  {
    id: "3",
    title: "After Diving",
  },
];

const Item = ({ title, id }) => (
  <View
    style={[
      styles.item,
      {
        marginLeft: id === "1" ? 20 : 10,
        backgroundColor: id === "1" ? "#97D0EF" : "#F2F4FA",
        paddingHorizontal: 0,
      },
    ]}
  >
    <Image
      style={styles.image}
      source={require("../assets/images/snorkel.jpg")}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Home() {
  let [fontsLoaded] = useFonts({
    regular: require("../assets/fonts/Raleway-Regular.ttf"),
    light: require("../assets/fonts/Raleway-Light.ttf"),
    bold: require("../assets/fonts/Raleway-Bold.ttf"),
  });
  const renderItem = ({ item }) => <Item title={item.title} id={item.id} />;
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={styles.container}>
       <View style={{paddingVertical: StatusBar.currentHeight || 0,}}>
       <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <AntDesign name="menu-fold" size={24} color="#212957" />
          <SimpleLineIcons name="bell" size={24} color="#212957" />
        </View>
        <StatusBar style="auto" />
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 30,
              color: "#212957",
              fontFamily: "bold",
              paddingTop: 20,
            }}
          >
            You want{"\n"}to diving?
          </Text>
        </View>
        <View style={styles.sectionStyle}>
          <Octicons
            style={styles.iconStyle}
            name="search"
            size={24}
            color="black"
          />
          <TextInput
            placeholder="Search for something here..."
            style={styles.input}
          />
        </View>

        <View style={{ paddingHorizontal: 0 }}>
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.card}>
          <ImageBackground
            source={require("../assets/images/diving.jpg")}
            //   resizeMode="contain"
            style={{
              width: Dimensions.width,
              height: 350,
              padding: 20,
              justifyContent: "space-between",
            }}
            imageStyle={{ borderRadius: 20 }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  alignSelf: "flex-start",
                  padding: 10,
                  paddingHorizontal: 15,
                  alignItems: "center",
                  borderRadius: 30,
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={24}
                  color="black"
                />
                <Text
                  style={{
                    color: "#212957",
                    fontSize: 14,
                    paddingLeft: 10,
                    fontFamily: "bold",
                  }}
                >
                  Opens in 24mins
                </Text>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="heart" size={18} color="#dc143c" />
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View>
                  <Text
                    style={{ color: "white", fontSize: 24, fontFamily: "bold" }}
                  >
                    Nyelam Laut
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Ionicons
                    name="md-location-sharp"
                    style={{ paddingRight: 10 }}
                    size={20}
                    color="white"
                  />
                  <Text style={{ color: "white", fontFamily: "regular" }}>
                    Pelabuhan Ratu
                  </Text>
                </View>
              </View>

              <View>
                <Text
                  style={{ color: "white", fontSize: 30, fontFamily: "bold" }}
                >
                  $120
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
       </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 20,
    backgroundColor: "white",
    

    
  },
  input: {
    padding: 10,
    backgroundColor: "#f2f4fa",
    borderRadius: 10,
    flex: 1,
    fontFamily: "regular",
  },
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    backgroundColor: "#f2f4fa",
    borderRadius: 10,
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  item: {
    padding: 3,
    paddingRight: 20,
    paddingLeft: 8,
    marginVertical: 10,
    borderRadius: 50,
    display: "flex",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    paddingLeft: 7,
    color: "#212957",
    fontFamily: "regular",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  card: {
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
