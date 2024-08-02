import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const StudyScreen = () => {
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(25 * 60); // Starting with a 25-minute session
    const [mode, setMode] = useState("work"); // Could be "work" or "break"

    useEffect(() => {
        let interval = null;
        if (isTimerActive && timerSeconds > 0) {
            interval = setInterval(() => {
                setTimerSeconds(timerSeconds - 1);
            }, 1000);
        } else if (timerSeconds === 0) {
            // Handle session end
            setIsTimerActive(false);
            setMode(mode === "work" ? "break" : "work");
            setTimerSeconds(mode === "work" ? 5 * 60 : 25 * 60); // Switch to break or new work session
        }
        return () => clearInterval(interval);
    }, [isTimerActive, timerSeconds, mode]);

    const toggleTimer = () => {
        setIsTimerActive(!isTimerActive);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{`${Math.floor(timerSeconds / 60)}:${("0" + (timerSeconds % 60)).slice(-2)}`}</Text>
            <TouchableOpacity style={styles.button} onPress={toggleTimer}>
                <Text style={styles.buttonText}>{isTimerActive ? "Pause" : "Start"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StudyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    timerText: {
        fontSize: 48,
        marginBottom: 30,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
    },
});