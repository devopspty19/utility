import axios from 'axios';

const obtenerUsuarios = async () => {
  try {
    const respuesta = await axios.get('https://api.ejemplo.com/usuarios');
    console.log(respuesta.data);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
};
