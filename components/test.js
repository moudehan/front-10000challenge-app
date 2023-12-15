import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Test = () => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonPress = () => {
    console.log("Input Value:", inputValue);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/step1.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>StepCHU</Text>
      <TextInput
        style={styles.input}
        placeholder="Identifiant..."
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <View style={styles.bottomImagesContainer}>
        <Image
          source={require("./../assets/CHULogo.png")}
          style={styles.bottomImage}
          resizeMode="contain"
        />
        <Image
          source={require("./../assets/DepsLogo.png")}
          style={styles.bottomImage}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 10,
  },
  title: {
    fontSize: 40,
    color: "#10669D",
  },
  input: {
    height: 40,
    borderColor: "#9D9D9D",
    borderWidth: 1,
    marginTop: 40,
    color: "red",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
    height: 50,

    width: "80%",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#10669D",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 40,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  bottomImagesContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    bottom: 30,
    left: 20,
    right: 0,
    marginHorizontal: 20,
  },
  bottomImage: {
    width: 120,
    height: 79,
  },
});

export default Test;
