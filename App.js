import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { login } from './src/storages/actions/login'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function HomeScreen() {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:"red"}}>Home!</Text>
      <Text style={{color:"red"}} onPress={()=>dispatch(login())}>Login</Text>
      <Text style={{color:"red"}}>{auth.data?.token}</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:"red"}}>Settings!</Text>
    </View>
  );
}
function ListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:"red"}}>ListScreen!</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:"red"}}>ProfileScreen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="ListScreen" component={ListScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}