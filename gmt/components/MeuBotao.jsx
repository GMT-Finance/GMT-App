import React from 'react';
import { Button } from 'react-native';

export default function MeuBotao({ titulo, onPress }) {
  return <Button title={titulo} onPress={onPress} />;
}
