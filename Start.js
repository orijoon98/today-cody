import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Start() {
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.titleContainer}>
                <Text style={styles.loading}>오늘의</Text>
                <Text style={styles.loading_2}> 코디</Text>
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.subtitle}>내 옷으로 쉽게 코디하기</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(241, 196, 15)",
        alignItems: "center",
        justifyContent: "center"
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    loading: {
        fontSize: 50,
        fontWeight: "600",
        color: "rgb(47, 53, 66)"
    },
    loading_2: {
        fontSize: 50,
        fontWeight: "600",
        color: "white"
    },
    subContainer: {
        flex: 1
    },
    subtitle: {
        fontSize: 17,
        color: "rgb(47, 53, 66)",
        fontWeight: "600",
        bottom: 170
    }
})