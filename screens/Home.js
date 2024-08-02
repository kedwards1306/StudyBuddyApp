import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import colors from '../color';

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            
                
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Study")}
                style={styles.studyButton}
            >
                <Entypo name="open-book" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
             
            
        </View>
    );
    };

    export default Home;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row', // Align children in a row
            justifyContent: 'space-around', // Distribute children evenly across the container's main axis
            alignItems: 'flex-end', // Align children to the end of the container's cross axis
            backgroundColor: "#fff",
            paddingBottom: 20, // Add some padding at the bottom
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        },
        studyButton: {
            backgroundColor: colors.primary, // Use a different color for the study button
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
        },
        studyButtonText: {
            marginTop: 5,
            color: "#fff",
            fontSize: 20,
        },
    });