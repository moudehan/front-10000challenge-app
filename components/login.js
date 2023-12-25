import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usersData from "./users.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const schema = yup.object().shape({
  email: yup.string().required("Email requis").email("Email invalide"),
});

const LoginPage = ({ navigation }) => {
  const [customError, setCustomError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    const user = usersData.find((user) => user.email === data.email);
    if (user) {
      await AsyncStorage.setItem("userId", user.id.toString());
      navigation.navigate("home");
    } else {
      setCustomError("Utilisateur non trouvé");
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      reset({ email: "" }); // Réinitialiser le champ email
    });

    return unsubscribe;
  }, [navigation, reset]);
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image source={require("./../assets/step1.png")} style={styles.logo} />
        <Text style={styles.title}>StepCHU</Text>

        <View
          style={[
            styles.inputContainer,
            (errors.email || customError) && styles.errorBorder,
          ]}
        >
          <Icon
            name="mail-outline"
            size={20}
            color="#B0E0E6"
            style={styles.mailIcon}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(text) => {
                  onChange(text);
                  setCustomError(""); // Réinitialiser le message d'erreur personnalisé
                }}
                value={value}
                placeholder="cesi@chu-rouen.fr"
                placeholderTextColor="#B0E0E6"
              />
            )}
            name="email"
            defaultValue=""
          />
        </View>
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        {customError && <Text style={styles.errorText}>{customError}</Text>}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleLogin)}
        >
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#146591",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    justifyContent: "center",
    elevation: 5,
    width: "100%",
    height: "80%",
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10669D",
    marginTop: 10,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    width: "100%",
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#B0E0E6",
    marginBottom: 5,
  },
  input: {
    flex: 1,
    color: "#151624",
    fontSize: 16,
    marginLeft: 10,
  },
  mailIcon: {
    position: "absolute",
    left: 15,
  },
  validationIcon: {
    position: "absolute",
    right: 15,
  },
  button: {
    height: 45,
    backgroundColor: "#13A6B6",
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorBorder: {
    borderColor: "red",
  },
  errorText: {
    fontSize: 14,
    color: "red",
  },
});

export default LoginPage;
