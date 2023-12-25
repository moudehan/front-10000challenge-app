import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import TabBar from "./navDrawer/TabBar";
import NavBar from "./navDrawer/NavBar";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import usersData from "./users.json";
import badgesData from "./badges.json";

export default function BadgePage({ navigation }) {
  const [activeTab, setActiveTab] = useState("profil");
  const [userBadges, setUserBadges] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = await AsyncStorage.getItem("userId");
      const user = usersData.find((u) => u.id.toString() === userId);
      if (user) {
        setUserBadges(user.badges); // Supposons que user.badges soit un tableau d'ID de badges
      }
    };

    fetchUserData();
  }, []);

  const isBadgeActive = (badgeId) => userBadges.includes(badgeId.toString());

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar paramIcon={false} title="Mes Badges" navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={badgesData}
          renderItem={({ item }) => (
            <BadgeItem color={item.color} isActive={isBadgeActive(item.id)} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.badgesContainer}
        />
      </View>
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

const BadgeItem = ({ color, isActive }) => {
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: isActive ? color : "lightgray" },
      ]}
    >
      <View
        style={[
          styles.innerBadge,
          { borderColor: isActive ? "white" : "lightgray" },
        ]}
      >
        <Icon name="star" size={30} color={isActive ? "white" : "darkgray"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginTop: 100,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  badgesContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  badge: {
    margin: 15,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  innerBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2, // Set the white border width
    position: "absolute", // Position inside the outer badge
  },
  badgeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
