import React from 'react';
import CurrentWeather from '../../src/Screens/CurrentWeather';
import UpcomingWeather from '../../src/Screens/UpcomingWeather';
import City from '../../src/Screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                // tabBarInactiveBackgroundColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'lightblue'
                },
                headerStyle: {
                    backgroundColor: 'lightblue'
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'grey',
                },
                headerTitleAlign: 'center'
            }}
        >
            <Tab.Screen name={'Current'} component={CurrentWeather} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name={'droplet'}
                        size={22}
                        color={focused ? 'tomato' : 'black'}
                    />
                )
            }} />
            <Tab.Screen name={'Upcoming'} component={UpcomingWeather} options={{
                tabBarIcon: ({ focused }) => (
                    < Feather
                        name={'clock'}
                        size={22}
                        color={focused ? 'tomato' : 'black'}
                    />
                )
            }} />
            <Tab.Screen name={'City'} component={City} options={{
                tabBarIcon: ({ focused }) => (
                    < Feather
                        name={'home'}
                        size={22}
                        color={focused ? 'tomato' : 'black'}
                    />
                )
            }} />
        </Tab.Navigator >
    );
}

export default Tabs;