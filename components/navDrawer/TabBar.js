import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const TabBar = ({ activeTab, setActiveTab }) => {
  const tabIcons = [
    { name: "news", label: "Actualités", icon: "globe-outline" },
    { name: "challenges", label: "Challenges", icon: "medal-outline" },
    { name: "home", label: "Accueil", icon: "home-outline" },
    { name: "quiz", label: "Quiz", icon: "school-outline" },
    { name: "profile", label: "Profil", icon: "person-circle-outline" },
  ];

  return (
    <View style={styles.tabBar}>
      {tabIcons.map((tab, index) => (
        <View key={index} style={styles.tabItemContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab(tab.name)}
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
