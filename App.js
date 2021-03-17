import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Closet from './Closet';
import Cody from './Cody';
import Weather from "./Weather";
import My from './My';
import Start from './Start'

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      isLoading ? <Start /> : (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="홈"
          tabBarOptions={{
            style : {
              height : 100
            },
            activeTintColor: "black",
            inactiveTintColor: "black"
            
          }}        
        >
          <Tab.Screen 
            name="홈" 
            component={Home}
            options={{
              tabBarIcon: ({ focused })=>{
                return(
                  <Image
                  source={focused ? require("./assets/icons/home_active.png"): require("./assets/icons/home_inactive.png")}
                  style={{width: 25, height: 25}}
                  />
                );
              }
            }}  
          />
          <Tab.Screen 
            name="옷장" 
            component={Closet}
            options={{
              tabBarIcon: ({ focused })=>{
                return(
                  <Image
                  source={focused ? require("./assets/icons/closet_active.png"): require("./assets/icons/closet_inactive.png")}
                  style={{width: 25, height: 25}}
                  />
                );
              }
            }}
          />
          <Tab.Screen 
            name="코디" 
            component={Cody}
            options={{
              tabBarIcon: ({ focused })=>{
                return(
                  <Image
                  source={focused ? require("./assets/icons/cody_active.png"): require("./assets/icons/cody_inactive.png")}
                  style={{width: 25, height: 25}}
                  />
                );
              }
            }}
          />
          <Tab.Screen
            name="날씨" 
            component={Weather}
            options={{
              tabBarIcon: ({ focused })=>{
                return(
                  <Image
                  source={focused ? require("./assets/icons/weather_active.png"): require("./assets/icons/weather_inactive.png")}
                  style={{width: 25, height: 25}}
                  />
                );
              }
            }}  
          />
          <Tab.Screen 
            name="MY" 
            component={My}
            options={{
              tabBarIcon: ({ focused })=>{
                return(
                  <Image
                  source={focused ? require("./assets/icons/my_active.png"): require("./assets/icons/my_inactive.png")}
                  style={{width: 25, height: 25}}
                  />
                );
              }
            }}   
          />
        </Tab.Navigator>
      </NavigationContainer>
      )
    );
  }
}
