import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import TabBar from "./navDrawer/TabBar";
import NavBar from "./navDrawer/NavBar";

export default function AproposPage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* NavBar */}
      <NavBar paramIcon={false} title="A propos" />

      {/* TabBar */}
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    marginBottom: 30,
  },
  stepsCount: {
    color: "#363F5E",
    fontWeight: "bold",
    fontSize: 30,
  },
  stepsText: {
    fontSize: 20,
    color: "#EAF2FF",
    textAlign: "center",
  },
  titleBelowCircle: {
    fontSize: 16,
    color: "#363F5E",
    fontWeight: "bold",
  },
});
