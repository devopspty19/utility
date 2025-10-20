import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('token', 'abc123');
const token = await SecureStore.getItemAsync('token');
