import React from 'react';
import { ScrollView, View } from 'react-native';
import Passagem from '../components/Passagem';

const IndexScreen = () => {
  return (
    <View>
      <ScrollView>
        <Passagem id={1} valor={150} de="PALMITAL" para="RIO DE JANEIRO" />
        <Passagem id={2} valor={90} de="Guarapuava" para="GUARULHOS" />
        <Passagem id={3} valor={120} de="Curitiba" para="SÃO PAULO" />
        <Passagem id={4} valor={200} de="Londrina" para="PORTO ALEGRE" />
        <Passagem id={5} valor={175} de="Maringá" para="FLORIANÓPOLIS" />
        <Passagem id={6} valor={80} de="Cascavel" para="CAMPINAS" />
        <Passagem id={7} valor={220} de="Foz do Iguaçu" para="SALVADOR" />
        <Passagem id={8} valor={95} de="Ponta Grossa" para="BELO HORIZONTE" />
        <Passagem id={9} valor={160} de="Toledo" para="BRASÍLIA" />
        <Passagem id={10} valor={140} de="Umuarama" para="RECIFE" />
      </ScrollView>
    </View>
  );
};

export default IndexScreen;
