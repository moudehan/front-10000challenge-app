import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const TabBar = ({ activeTab, setActiveTab, navigation }) => {
  const tabIcons = [
    {
      name: "news",
      label: "Actualités",
      icon: "globe-outline",
      screen: "Actualites",
    },
    {
      name: "challenges",
      label: "Challenges",
      icon: "medal-outline",
      screen: "ChallengesScreen",
    },
    {
      name: "home",
      label: "Accueil",
      icon: "home-outline",
      screen: "home",
    },
    {
      name: "quiz",
      label: "Quiz",
      icon: "school-outline",
      screen: "QuizScreen",
    },
    {
      name: "profil",
      label: "Profil",
      icon: "person-circle-outline",
      screen: "Profil",
    },
  ];

  const handleTabPress = (tab) => {
    setActiveTab(tab.name);
    navigation.navigate(tab.screen);
  };
  console.log(activeTab, setActiveTab);
  return (
    <View style={styles.tabBar}>
      {tabIcons.map((tab, index) => (
        <View key={index} style={styles.tabItemContainer}>
          <TouchableOpacity
            onPress={() => handleTabPress(tab)}
            style={[
              styles.tabItem,
              activeTab === tab.name ? styles.activeTabItem : null,
            ]}
          >
            {activeTab === tab.name && (
              <View style={styles.activeTabHighlight} />
            )}
            <Icon
              name={tab.icon}
              size={activeTab === tab.name ? 30 : 29}
              color={activeTab === tab.name ? "#E26C61" : "#A3A3A3"}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: activeTab === tab.name ? "#E26C61" : "#A3A3A3",
              fontSize: 10,
              textTransform: "capitalize",
            }}
          >
            {tab.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
  },
  tabItemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabItem: {
    paddingTop: 0,
  },
  activeTabHighlight: {
    position: "absolute",
    top: -10,
    width: "70%",
    height: 2,
    backgroundColor: "#E26C61",
    alignSelf: "center",
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 6,
    textTransform: "capitalize",
  },
});

export default TabBar;
