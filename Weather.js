import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Location from "expo-location";
import axios from "axios";
import Loading from "./Loading"
import ShowWeather from './ShowWeather';

const API_KEY = "526f133e90a28cc5e55749c921cade7b";

export default class Weather extends React.Component{
    state = {
        isLoading: true
    };

    getWeather = async(latitude, longitude) => {
        const {data:{main:{temp}, weather}} = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        this.setState({isLoading: false, condition: weather[0].main,  temp})
    }

    getLocation = async() => {
        try {
            await Location.requestPermissionsAsync();
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
        } catch (error) {
            Alert.alert("Can't find you.", "So sad");
        }
    }

    componentDidMount(){
        this.getLocation();
    } 
    
    render(){
        const { isLoading, temp, condition } = this.state;
        return(
            <View style={styles.container}>
                {isLoading ? (
                    <Loading />
                ) : (
                    <ShowWeather temp={Math.round(temp)} condition={condition} />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"        
    }
})
