import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('miBD.db');

db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT);'
  );
  tx.executeSql('INSERT INTO usuarios (nombre) VALUES (?)', ['Juan']);
  tx.executeSql('SELECT * FROM usuarios', [], (_, { rows }) => {
    console.log(rows._array);
  });
});
