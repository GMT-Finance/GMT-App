import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MeuBotao from '/workspaces/GMT-App/gmt/components/MeuBotao.jsx'; // Caminho correto

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App com Botão</Text>
      <MeuBotao titulo="Clique Aqui" onPress={() => alert('Botão clicado!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
