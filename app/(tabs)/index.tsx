import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path, Polygon } from "react-native-svg";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Index() {
  const [pantalla, setPantalla] = useState("login");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [correoRecuperar, setCorreoRecuperar] = useState("");

  const iniciarSesion = () => {
    if (!correo || !clave) {
      Alert.alert("Error", "Llena todos los campos");
      return;
    }

    signInWithEmailAndPassword(auth, correo, clave)
      .then((userCredential) => {
        Alert.alert("Bienvenido", "Sesión iniciada correctamente");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  const enviarCodigo = () => {
    if (!correoRecuperar) {
      Alert.alert("Error", "Ingresa tu correo");
      return;
    }

    sendPasswordResetEmail(auth, correoRecuperar)
      .then(() => {
        Alert.alert("Listo", "Revisa tu correo para recuperar contraseña");
        setPantalla("login");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  if (pantalla === "forgot") {
    return (
      <View style={styles.forgotContainer}>
        <View style={styles.forgotContent}>
          <View style={styles.forgotIconContainer}>
            <Ionicons name="lock-closed" size={60} color="#FFFFFF" />
          </View>

          <Text style={styles.forgotTitle}>Forgot your password?</Text>
          <Text style={styles.forgotSubtitle}>
            Enter your email address and we'll send you a verification code to recover it.
          </Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.forgotLabel}>Email adress</Text>
            
            <View style={styles.inputContainer}>
              <Ionicons name="mail" size={18} color="#021533" />
              <TextInput
                style={styles.input}
                placeholder="Enter your gmail"
                placeholderTextColor="#A0A0A0"
                value={correoRecuperar}
                onChangeText={setCorreoRecuperar}
                autoCapitalize="none"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={enviarCodigo}
          >
            <Text style={styles.forgotButtonText}>Send code</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity onPress={() => setPantalla("login")}>
            <Text style={styles.returnText}>Return to login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/images/KITELY.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.whitePanel}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome back!</Text>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email address</Text>
            
            <View style={styles.inputContainer}>
              <Ionicons name="mail" size={18} color="#021533" />
              <TextInput
                style={styles.input}
                placeholder="Enter your gmail or username"
                placeholderTextColor="#A0A0A0"
                value={correo}
                onChangeText={setCorreo}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Password</Text>
            
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed" size={18} color="#021533" />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#A0A0A0"
                secureTextEntry={true}
                value={clave}
                onChangeText={setClave}
                autoCapitalize="none"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.forgotPasswordLink}
            onPress={() => setPantalla("forgot")}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={iniciarSesion}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don’t have an account?
            </Text>
            <TouchableOpacity>
              <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.decoration} pointerEvents="none">
          <Svg
            width="100%"
            height="125"
            viewBox="0 0 400 125"
            style={styles.wave}
          >
            <Path
              d="M0 72 C75 67 125 83 190 82 C275 80 325 50 400 10 L400 125 L0 125 Z"
              fill="#D8D4FF"
            />
            <Path
              d="M0 91 C75 86 125 101 190 100 C275 98 325 69 400 28 L400 125 L0 125 Z"
              fill="#BDB7F5"
            />
          </Svg>

          <Svg
            width="95"
            height="120"
            viewBox="0 0 95 120"
            style={styles.kite}
          >
            <Polygon
              points="48,10 72,32 50,55 27,32"
              fill="none"
              stroke="#55A605"
              strokeWidth="3"
            />
            <Path
              d="M48 10 L50 55"
              fill="none"
              stroke="#55A605"
              strokeWidth="3"
            />
            <Path
              d="M50 55 C55 68 51 75 42 82 C32 89 23 86 16 94 C10 101 13 108 7 116"
              fill="none"
              stroke="#55A605"
              strokeWidth="3"
            />
            <Polygon
              points="17,89 27,97 23,108 13,101 14,92"
              fill="none"
              stroke="#55A605"
              strokeWidth="2.5"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021B42",
  },
  topSection: {
    height: "21%",
    backgroundColor: "#021B42",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  logo: {
    width: 165,
    height: 90,
    resizeMode: "contain",
  },
  whitePanel: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    overflow: "hidden",
  },
  content: {
    paddingHorizontal: 35,
    paddingTop: 38,
    zIndex: 5,
  },
  title: {
    fontSize: 29,
    fontWeight: "700",
    color: "#021533",
    marginBottom: 32,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#021533",
    marginLeft: 18,
    marginBottom: 8,
    fontWeight: "500",
  },
  inputContainer: {
    height: 58,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#021533",
    marginLeft: 13,
    paddingVertical: 0,
  },
  forgotPasswordLink: {
    alignItems: "flex-end",
    marginBottom: 15,
  },
  forgotPasswordText: {
    color: "#55C900",
    fontSize: 15,
    fontWeight: "600",
  },
  button: {
    height: 57,
    backgroundColor: "#55C900",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    zIndex: 10,
  },
  footerText: {
    color: "#8A8A8A",
    fontSize: 16,
  },
  signUp: {
    color: "#173C53",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 7,
  },
  decoration: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 135,
    zIndex: 1,
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  kite: {
    position: "absolute",
    bottom: 2,
    left: "43%",
  },
  forgotContainer: {
    flex: 1,
    backgroundColor: "#021B42",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  forgotContent: {
    alignItems: "center",
    width: "100%",
  },
  forgotIconContainer: {
    marginBottom: 20,
  },
  forgotTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
    textAlign: "center",
  },
  forgotSubtitle: {
    fontSize: 14,
    color: "#A0ABC0",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  forgotLabel: {
    color: "#FFFFFF",
    marginBottom: 8,
    fontSize: 15,
    marginLeft: 4,
  },
  forgotButton: {
    height: 57,
    backgroundColor: "#55C900",
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  forgotButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#2C4066",
  },
  orText: {
    color: "#A0ABC0",
    paddingHorizontal: 10,
    fontSize: 14,
  },
  returnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
});