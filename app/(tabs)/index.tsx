import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View }  from "react-native";


interface CustomInputProps {

  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> =  ({ placeholder, secureTextEntry, value, onChangeText }) => (
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

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>

    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default function Index() {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const handleLogin = (): void => {
    console.log("Iniciando sesión con:", email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>

      <View style={styles.titleContainer}>

        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>Log in</Text>
      </View>

      <View style={styles.formContainer}>
        <CustomInput 
          placeholder="Email" 
          value={email} 
          
          onChangeText={setEmail} 
          secureTextEntry={false}
        />
        <CustomInput 
          placeholder="Password" 
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
    color: "#021533",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 35,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#021533",
  },
  subtitle: {
    fontSize: 12,
    color: "#021533",
    marginTop: 8,
  },
  formContainer: {
    marginBottom: 25,
  },
  buttonContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  button: {
    backgroundColor: "#88da1b",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#021533",
    fontSize: 16,
    fontWeight: "bold",
    
  },
});