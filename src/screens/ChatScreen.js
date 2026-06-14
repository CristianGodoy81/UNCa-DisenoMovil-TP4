import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Importante para que la hora/batería se vea blanca
import { Theme } from '../constants/Theme'; 

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* Forzamos a que los iconos de la barra de estado del celular sean claros */}
      <StatusBar style="light" /> 
      
      <View style={styles.container}>
        
        <Text style={styles.title}>¡Bienvenido a ChatScreen!</Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Theme.spacing.lg,
  },
  title: {
    fontSize: Theme.size.title,
    color: Theme.colors.text,
    fontWeight: 'bold',
    marginBottom: Theme.spacing.sm,
  },
  subtitle: {
    fontSize: Theme.size.body,
    color: Theme.colors.textMuted,
    marginBottom: Theme.spacing.xl,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.xl,
    borderRadius: Theme.roundness.medium,
  },
  buttonText: {
    color: '#121212',
    fontSize: Theme.size.body,
    fontWeight: '600',
  },
});