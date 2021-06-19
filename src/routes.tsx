import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import Login from './screens/Login';
import Home from './screens/Home';
import Bet from './screens/Bet';
import Account from './screens/Account';
import {AntDesign} from '@expo/vector-icons';
import {StatusBar} from 'expo-status-bar';

const BottomTab = createBottomTabNavigator();

const LoggedScreen: any = () => (
	<BottomTab.Navigator
		screenOptions={({route, navigation}) => ({
			tabBarIcon: ({color, size, focused}) => {
				let iconColor;
				if (route.name === 'Home') {
					iconColor = focused ? '#B5C401' : '#C1C1C1';
					return (
						<View
							style={{
								borderTopWidth: 4,
								borderColor: iconColor,
								borderRadius: 2,
								padding: 7,
							}}
						>
							<AntDesign
								name="home"
								size={32}
								color={iconColor}
							/>
						</View>
					);
				}
				if (route.name === 'Account') {
					iconColor = focused ? '#B5C401' : '#C1C1C1';
					return (
						<View
							style={{
								borderTopWidth: 4,
								borderColor: iconColor,
								borderRadius: 2,
								padding: 7,
							}}
						>
							<AntDesign
								name="user"
								size={32}
								color={iconColor}
							/>
						</View>
					);
				}
				if (route.name === 'Bet') {
					iconColor = focused ? '#B5C401' : '#fff';
					return (
						<View
							style={{
								backgroundColor: '#B5C401',
								borderWidth: 5,
								borderColor: iconColor,
								elevation: 2,
								width: 100,
								height: 100,
								borderRadius: 50,
								alignItems: 'center',
								justifyContent: 'center',
								marginBottom: 20,
							}}
						>
							<Image
								source={require('../assets/BetIcon.png')}
								style={{
									marginTop: 4,
									width: 63,
									height: 62,
								}}
							/>
						</View>
					);
				}
			},
		})}
		tabBarOptions={{
			style: {
				height: 72,
				backgroundColor: '#FFFFFF',
				borderTopColor: 'rgba(255, 255, 255, 0.2)',
			},
			labelStyle: {
				fontFamily: 'Roboto Classic',
				fontSize: 14,
				marginBottom: 5,
			},
			activeTintColor: '#707070',
			inactiveTintColor: '#C1C1C1',
		}}
	>
		<BottomTab.Screen name="Home" component={Home} />
		<BottomTab.Screen
			name="Bet"
			component={Bet}
			options={{tabBarLabel: ''}}
		/>
		<BottomTab.Screen name="Account" component={Account} />
	</BottomTab.Navigator>
);

const Stack = createStackNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen
					name="LoggedScreen"
					component={LoggedScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
