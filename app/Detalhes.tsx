import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { red } from '@mui/material/colors';

type DetalhesParams = {
  id: number;
  de: string;
  para: string;
  valor: number;
};

export default function Detalhes() {
  const actionSheetRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<Record<string, DetalhesParams>, string>>();
  const { id, de, para, valor } = route.params;

  const handleDelete = () => {
    Alert.alert('Passagem apagada do seu carrinho', `ID: ${id}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 20, backgroundColor: '#E8D581', borderRadius: 12, elevation: 4 }}>
        <Text style={styles.text}>ID: {id}</Text>
        <Text style={styles.text}>De: {de.toUpperCase()}</Text>
        <Text style={styles.text}>Para: {para.toUpperCase()}</Text>
        <Text style={styles.text}>Valor: R$ {valor.toFixed(2)}</Text>
        <Button color="red" title="Apagar" onPress={() => actionSheetRef.current?.show()} />
        <ActionSheet ref={actionSheetRef}>
          <View style={styles.sheet}>
            <Text>Tem certeza que deseja apagar?</Text>
            <Button color="red" title="Confirmar" onPress={handleDelete} />
            <Button color="grey" title="Voltar" onPress={() => actionSheetRef.current?.hide()} />
          </View>
        </ActionSheet>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  sheet: {
    padding: 20,
    gap: 10,
  },
});