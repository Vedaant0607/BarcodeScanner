import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TransactionScreen from "./screens/BookTransactionScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
