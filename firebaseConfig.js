// firebaseConfig.js
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/app';

// Exemplo de configuração Firebase, substitua com sua configuração real
const firebaseConfig = {
  apiKey: "AIzaSyDRv8e1FwNGiCU4qM5MsvqLP4rmVTFAJDY",
  authDomain: "com.equipe.GuiaEstacio",
  databaseURL: "https://app-de-guia-estacio-default-rtdb.firebaseio.com",
  projectId: "1204619621",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Verifique se o Firebase já foi inicializado, se não, inicialize.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Se já inicializado
}

export { database };  // Exporta o Realtime Database para ser usado em outros arquivos
