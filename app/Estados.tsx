import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Data = [
  {
    Estado: 'PR',
    Cidade: 'Palmital, Guarapuava, Curitiba, Londrina, Maringá',
  },
  {
    Estado: 'SP',
    Cidade: 'São Paulo, Campinas, Santos, Sorocaba, Ribeirão Preto',
  },
  {
    Estado: 'RJ',
    Cidade: 'Rio de Janeiro, Niterói, Petrópolis, Campos dos Goytacazes, Volta Redonda',
  },
  {
    Estado: 'MG',
    Cidade: 'Belo Horizonte, Uberlândia, Juiz de Fora, Contagem, Montes Claros',
  },
  {
    Estado: 'RS',
    Cidade: 'Porto Alegre, Caxias do Sul, Pelotas, Canoas, Santa Maria',
  },
  {
    Estado: 'BA',
    Cidade: 'Salvador, Feira de Santana, Vitória da Conquista, Camaçari, Itabuna',
  },
  {
    Estado: 'SC',
    Cidade: 'Florianópolis, Joinville, Blumenau, Chapecó, Criciúma',
  },
  {
    Estado: 'GO',
    Cidade: 'Goiânia, Anápolis, Aparecida de Goiânia, Rio Verde, Luziânia',
  },
  {
    Estado: 'PE',
    Cidade: 'Recife, Olinda, Jaboatão dos Guararapes, Caruaru, Petrolina',
  },
  {
    Estado: 'CE',
    Cidade: 'Fortaleza, Juazeiro do Norte, Sobral, Maracanaú, Caucaia',
  },
];

type ItemProps = {
  estado: string;
  cidade: string;
};

const Item = ({ estado, cidade }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.estado}>{estado}</Text>
    <Text style={styles.cidade}>{cidade}</Text>
  </View>
);

const Estados = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estados por onde passamos</Text>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.Estado}
        renderItem={({ item }) => (
          <Item estado={item.Estado} cidade={item.Cidade} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#e0f7fa',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
  },
  estado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
    textAlign: 'center',
  },
  cidade: {
    fontSize: 16,
    color: '#004d40',
    marginTop: 4,
  },
});

export default Estados;
