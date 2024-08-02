import React, {useState } from "react";
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Alert,
    Modal,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar
  } from "react-native";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import {auth} from "../FireBaseConfig.js";


  export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onHandleLogin = () => {
        if (email !== "" && password !=="") {
            signInWithEmailAndPassword(auth,email, password)
            .then(() => console.log("Login success"))
            .catch((err) => Alert.alert("Login error", err.message))
        }
    };

    return (
        <View style={styles.container}>
          <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
         <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{color: 'red', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />

        </View>


    );
  }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
        },
        title: {
            fontSize: 36,
            fontWeight: 'bold',
            color: "red",
            alignSelf: "center",
            paddingBottom: 24,
          },
          input: {
            backgroundColor: "#F6F7FB",
            height: 58,
            marginBottom: 20,
            fontSize: 16,
            borderRadius: 10,
            padding: 12,
          },
        form: {
            flex: 1,
            justifyContent: 'center',
            marginHorizontal: 30,
          },
          button: {
            backgroundColor: 'red',
            height: 58,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          },
          

        });
   
  
