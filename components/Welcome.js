import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { CircularProgress } from "react-native-circular-progress";
import TabBar from "./navDrawer/TabBar";
import NavBar from "./navDrawer/NavBar";

export default function WelcomePage() {
  const currentSteps = 2500;
  const goalSteps = 10000;
  const [activeTab, setActiveTab] = useState("home");

  const handleBackPress = () => console.log("Back button pressed");
  const handleSettingsPress = () => console.log("Settings button pressed");

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* NavBar */}
      <NavBar
        handleBackPress={handleBackPress}
        handleSettingsPress={handleSettingsPress}
      />

      {/* Contenu principal */}
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <CircularProgress
            size={200}
            width={25}
            fill={(currentSteps / goalSteps) * 100}
            tintColor="#13A6B6"
            backgroundColor="#EAF2FF"
          >
            {() => (
              <Text style={styles.stepsText}>
                <Text style={styles.stepsCount}>{currentSteps}</Text>
                <Text style={styles.sepspas}> {"\nPas"}</Text>
              </Text>
            )}
          </CircularProgress>
        </View>
        <Text style={styles.titleBelowCircle}>Historique</Text>
      </View>

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
