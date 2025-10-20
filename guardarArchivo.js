import * as FileSystem from 'expo-file-system';

const guardarTexto = async () => {
  const ruta = FileSystem.documentDirectory + 'datos.txt';
  await FileSystem.writeAsStringAsync(ruta, 'Hola Juan, este es un archivo guardado.');
};
