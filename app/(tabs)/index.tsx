import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenido a Kitely</Text>
        <Text style={styles.subtitle}>
          Inicia sesión para continuar
        </Text>
      </View>


      <View style={styles.formContainer}>

      </View>

      <View style={styles.buttonContainer}>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logoText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  titleContainer: {
    alignItems: "center",
    marginBottom: 35,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },

  formContainer: {
    marginBottom: 25,
  },

  buttonContainer: {
    marginTop: 10,
  },
});


