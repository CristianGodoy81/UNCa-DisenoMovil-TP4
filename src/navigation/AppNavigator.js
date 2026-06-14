import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importamos las pantallas
import FeedScreen from '../screens/FeedScreen';
import UserScreen from '../screens/UserScreen';
import ChatScreen from '../screens/ChatScreen';

// Inicializamos el enrutador de pestañas
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Feed"
        screenOptions={{
          headerShown: true, // Muestra el título de la pantalla arriba
          tabBarActiveTintColor: '#1A73E8', // Color de la pestaña activa
          tabBarInactiveTintColor: 'gray',  // Color de la pestaña inactiva
        }}
      >
        {/* Definición de las rutas necesarias */}
        <Tab.Screen 
          name="Feed" 
          component={FeedScreen} 
          options={{ title: 'Feed' }} 
        />
        <Tab.Screen 
          name="Perfil" 
          component={UserScreen} 
          options={{ title: 'Perfil' }} 
        />
        <Tab.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{ title: 'Chat' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}