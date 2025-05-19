import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

type PassagemProps = {
  id: number;
  de: string;
  para: string;
  valor: number;
};

type RootStackParamList = {
  index: undefined;
  Detalhes: { id: number; de: string; para: string; valor: number };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'index'>;

const Passagem: React.FC<PassagemProps> = ({ id, de, para, valor }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Detalhes', { id, de, para, valor });
  };

  return (
    <LinearGradient
      colors={['#4facfe', '#00f2fe']}
      style={styles.passagem}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.block}>
        <Text style={styles.text}>De: {de.toUpperCase()}</Text>
        <Text style={styles.text}>Para: {para}</Text>
        <Text style={styles.text}>Valor: R$ {valor}</Text>
      <Button title="Comprar" onPress={handlePress} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  passagem: {
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    elevation: 4,
  },
  text: {
    color: '#fff',
    marginBottom: 6,
  },
  block: {
    width: '80%',
  }
});

export default Passagem;
