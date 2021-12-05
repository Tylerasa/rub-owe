import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Location from "../screens/Location";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  MaterialIcons,
  Octicons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";
import Booking from "../screens/Booking";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#f3ecec99",
        tabBarActiveBackgroundColor: "#212957",
        tabBarInactiveBackgroundColor: "#212957",
        headerShown: false,
        tabBarShowLabel: false,
        style: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              style={{ paddingTop: 10 }}
              name="home-filled"
              size={20}
              color={color}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons
              style={{ paddingTop: 10 }}
              name="search"
              size={20}
              color={color}
            />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo
              name="location"
              style={{ paddingTop: 10 }}
              size={20}
              color={color}
            />
          ),
        }}
        name="Location"
        component={LocationScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="user-circle"
              style={{ paddingTop: 10 }}
              size={20}
              color={color}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
export default Tabs;

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={Home}
      />
       <Stack.Screen
        options={{ headerShown: false }}
        name="Booking"
        component={Booking}
      />
    </Stack.Navigator>
  );
};

const SearchScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SeacrhScreen" component={Search} />
    </Stack.Navigator>
  );
};

const LocationScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LocationScreen" component={Location} />
    </Stack.Navigator>
  );
};
const ProfileScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  );
};
