import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TabBar from "./navDrawer/TabBar";

const ProfilPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.upperSection}>
        <Icon name="pencil" size={24} color="white" style={styles.editIcon} />
        <View style={styles.profileSection}>
          <Image style={styles.profilePic} />
          <Text style={styles.profileName}>Louis Chaudrois</Text>
          <Text style={styles.profileEmail}>louis.chaudrois@chu-rouen.fr</Text>
        </View>
      </View>

      <View style={styles.lowerSection}>
        <MenuItem iconName="person" text="Mon Compte" />
        <MenuItem iconName="medal-outline" text="Mes Badges" />
      </View>
      <View style={styles.lowerSection2}>
        <MenuItem iconName="log-out-outline" text="Déconnexion" isLastItem />
      </View>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
};

const MenuItem = ({ iconName, text, isLastItem }) => (
  <TouchableOpacity
    style={[styles.menuItem, isLastItem && styles.lastMenuItem]}
  >
    <Icon name={iconName} size={24} color="#E26C61" />
    <Text style={styles.menuItemText}>{text}</Text>
    <Icon name="chevron-forward-outline" size={24} color="#001F1C" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  upperSection: {
    backgroundColor: "#146591",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingBottom: 200,
    alignItems: "center",
    marginBottom: -170,
  },
  editIcon: {
    position: "absolute",
    right: 20,
    top: 50,
  },
  profileSection: {
    alignItems: "center",
    marginTop: 50,
  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 40,
    backgroundColor: "#ccc",
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  profileEmail: {
    color: "#D3D4D4",
    fontSize: 12,
    marginTop: 4,
  },
  lowerSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginHorizontal: 16,
    // marginHorizontal: 40,
    paddingHorizontal: 24,
  },
  lowerSection2: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginTop: -20,
    // marginHorizontal: 16,
    paddingVertical: 0,
    marginHorizontal: 40,
    // marginTop: 20,
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 14,
    color: "#001F1C",
  },
});

export default ProfilPage;
