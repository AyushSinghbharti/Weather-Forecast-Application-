import React from 'react';
import CurrentWeather from '../../src/Screens/CurrentWeather';
import UpcomingWeather from '../../src/Screens/UpcomingWeather';
import City from '../../src/Screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
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
            <Tab.Screen name={'Current Weather'} options={{
                tabBarIcon: ({ focused }) => (
                    <Feather
                        name={'droplet'}
                        size={22}
                        color={focused ? 'tomato' : 'black'}
                    />
                )
            }}>
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>

            <Tab.Screen name={'Upcoming Weather'} options={{
                tabBarIcon: ({ focused }) => (
                    < Feather
                        name={'clock'}
                        size={22}
                        color={focused ? 'tomato' : 'black'}
                    />
                )
            }}>
                {() => <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>

            <Tab.Screen name={'Loaction info'} options={{
                tabBarIcon: ({ focused }) => (
                    < Feather
                        name={'home'}
                        size={22}
                        color={focused ? 'tomato' : 'black'}
                    />
                )
            }}>
                {() => <City weatherData={weather.city}/>}
            </Tab.Screen>
        </Tab.Navigator >
    );
}

export default Tabs;