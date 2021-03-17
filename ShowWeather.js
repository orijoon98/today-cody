import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        title: "뇌우",
        subtitle: "천둥친다 벼락 조심해라"
    },
    Drizzle: {
        iconName: "weather-hail",
        title: "이슬비",
        subtitle: "비 조금 온다 그냥 맞아라"
    },
    Rain: {
        iconName: "weather-rainy",
        title: "비",
        subtitle: "머리 빠지기 싫으면 우산 써라"
    },
    Snow: {
        iconName: "weather-snowy",
        title: "눈",
        subtitle: "두 유 워나 빌드 어 스노우맨?"
    },
    Mist: {
        iconName: "weather-fog",
        title: "안개",
        subtitle: "안개가 자욱하다"
    },
    Smoke: {
        iconName: "weather-fog",
        title: "연기",
        subtitle: "연기가 자욱하다"
    },
    Haze: {
        iconName: "weather-fog",
        title: "안개",
        subtitle: "안개가 자욱하다"
    },
    Dust: {
        iconName: "weather-fog",
        title: "먼지",
        subtitle: "먼지 미쳤다"
    },
    Fog: {
        iconName: "weather-fog",
        title: "안개",
        subtitle: "안개가 자욱하다"
    },
    Sand: {
        iconName: "weather-fog",
        title: "황사",
        subtitle: "황사 미쳤다"
    },
    Ash: {
        iconName: "weather-fog",
        title: "재",
        subtitle: "재가 떠다닌다고?"        
    },
    Squall: {
        iconName: "weather-pouring",
        title: "스콜",
        subtitle: "한국에 스콜이 있어?"
    },
    Tornado: {
        iconName: "weather-tornado",
        title: "토네이도",
        subtitle: "토네이도는 과했다"
    },
    Clear: {
        iconName: "weather-sunny",
        title: "맑음",
        subtitle: "날씨가 매우 좋아"
    },
    Clouds: {
        iconName: "weather-cloudy",
        title: "흐림",
        subtitle: "날씨가 우중충하구나"
    }
};

export default function ShowWeather({ temp, condition }) {
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
                    <Text style={styles.titleText}>오늘의 날씨</Text>
                </View>
                <View
                    style={{flex:1}}
                >    
                </View>
            </View>
            <View style={styles.weatherContainer}>
                <MaterialCommunityIcons style={styles.weatherIcon}
                    size={120}
                    name={weatherOptions[condition].iconName}
                    color="rgb(255, 190, 118)"
                />
                <Text style={styles.weather}>{weatherOptions[condition].title}</Text>
                <Text style={styles.temp}>{temp}°</Text>                
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </View>
    )
}

ShowWeather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds",      
    ]).isRequired
};

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
    weatherContainer: {
        flex: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(223, 228, 234)"
    },
    weatherIcon: {
        bottom: 150
    },
    weather: {
        fontSize: 20,
        bottom: 150
    },
    temp: {
        fontSize: 50,
        bottom: 100
    },
    subtitle: {
        fontSize: 25
    }
})