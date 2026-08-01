import React, { useState } from "react";
import {
  Image,
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from "react-native";

interface CustomInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#888"
    secureTextEntry={secureTextEntry}
    value={value}
    onChangeText={onChangeText}
  />
);

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (): void => {
    console.log("Iniciando sesión con:", email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Kitely.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Log in to continue using Kitely
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email address</Text>

        <CustomInput
          placeholder="Enter your gmail or username"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>

        <CustomInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Log in"
          onPress={handleLogin}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?
        </Text>

        <TouchableOpacity>
          <Text style={styles.signUp}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 45,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#021533",
  },

  titleContainer: {
    marginBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#021533",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#7A7A7A",
  },

  formContainer: {
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#021533",
    marginBottom: 8,
    marginLeft: 3,
  },

  input: {
    backgroundColor: "#FAFBFB",
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 15,
    fontSize: 15,
    color: "#021533",
    marginBottom: 18,
  },

  buttonContainer: {
    marginTop: 5,
  },

  button: {
    backgroundColor: "#55A605",
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FAFBFB",
    fontSize: 16,
    fontWeight: "700",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  footerText: {
    color: "#8A8A8A",
    fontSize: 14,
  },

  signUp: {
    color: "#021533",
    fontWeight: "700",
    fontSize: 14,
  },
});