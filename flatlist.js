import { FlatList, Text, View } from 'react-native';

const datos = [
  { id: '1', nombre: 'Panamá' },
  { id: '2', nombre: 'Chile' },
  { id: '3', nombre: 'Perú' },
];

export default function App() {
  return (
    <FlatList
      data={datos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.nombre}</Text>
        </View>
      )}
    />
  );
}
