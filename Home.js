import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home() {
    return(
        <View style={styles.container}>                
            <StatusBar barStyle="dark-content" />
            <View style={styles.titleContainer}>
                <View 
                    style={{flex:1}}
                >
                    <TouchableOpacity
                        style={{alignItems:"flex-start", top:60}}
                    >
                        <Image 
                        source={require("./assets/icons/menu.png")}
                        style={{width:25, height:25, marginLeft:10}} 
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>오늘의 </Text>
                    <Text style={styles.titleText2}>코디</Text>
                </View>
                <View
                    style={{flex:1}}
                >    
                </View>
            </View>
            <View style={styles.HomeContainer}>
                <Text style={styles.HomeText}>홈</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"        
    },
    titleContainer: {
        flex: 1,
        flexDirection: "row"
    },
    title: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    titleText: {
        fontSize: 25,
        fontWeight: "500",
        color: "rgb(47, 53, 66)",
        top: 20
    },
    titleText2: {
        fontSize: 25,
        fontWeight: "500",
        color: "rgb(255, 190, 118)",
        top: 20
    },
    HomeContainer: {
        flex: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(223, 228, 234)"
    },
    HomeText: {
        fontSize: 25,
        color: "rgb(255, 190, 118)"
    }
})