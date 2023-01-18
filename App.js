
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { login } from './src/storages/actions/login';
import { logout } from './src/storages/actions/logout';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({navigation}) {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{
            itemId: 86,
            otherParam: 'anything you want here',
        })}
      />
      <Button
        title="Login"
        onPress={() =>dispatch(login())}
      />
      <Text style={{color:"blue",fontSize:40}}>{auth.data?.token}</Text>
    </View>
  );
}
function DetailsScreen({route, navigation}) {
  const {itemId,otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:"red"}}>Details Screen</Text>
      <Text style={{color:"red"}}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={{color:"red"}}>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

function Profile() {
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <Button
        title="logout"
        onPress={() =>dispatch(logout())}
      />
    </View>
  );
}

function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}
function SplashScreen () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"skyblue" }}>
      <Text>SplashScreen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function ButtomNav() {
  return (
      <Tab.Navigator screenOptions={{tabBarShowLabel:false}} >
        <Tab.Screen name="Profile" component={Profile}  screenOptions={{ShowLabel:false}} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
  );
}

function Router() {
  const auth = useSelector((state)=>state.auth)
      return (
      <NavigationContainer>
      <Stack.Navigator>
        {
        
          auth.data ?
          (
            <Stack.Screen name="ButtomNav" component={ButtomNav} screenOptions={{"tabBarShowLabel":false}}   />
          )
          :
          (
           <>
           <Stack.Screen name="Home" component={HomeScreen} options={{title:"Home Screen" ,headerStyle: {
               backgroundColor: '#f4511e',
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
               fontWeight: 'bold',
             },}} />
           <Stack.Screen name="Details" component={DetailsScreen} />
           </> 
          )
        }
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default Router;