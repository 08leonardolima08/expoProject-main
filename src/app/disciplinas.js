import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header } from "../components/header";
import Constants from 'expo-constants';
import database from '@react-native-firebase/database';

const statusBarHeight = Constants.statusBarHeight;

export default function Disciplinas() {
  const [disciplinas, setDisciplinas] = useState({});

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        // Referência para a chave "disciplinas" no banco de dados
        const snapshot = await database().ref('/disciplinas').once('value');
        
        // Atualiza o estado com os dados retornados do Firebase
        setDisciplinas(snapshot.val() || {});
      } catch (error) {
        console.error("Erro ao buscar dados do Firebase: ", error);
      }
    };

    fetchDisciplinas();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20, paddingTop: statusBarHeight }}
      className="bg-cyan-400"
    >
      <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
        <Header />
      </View>

      {/* Exibe cada disciplina dinamicamente */}
      {Object.entries(disciplinas).map(([disciplina, { topicos }]) => (
        <View
          key={disciplina}
          style={{
            marginTop: 20,
            backgroundColor: '#ffffff',
            padding: 16,
            marginHorizontal: 16,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            elevation: 4,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
            {disciplina.replace(/_/g, ' ')}
          </Text>
          {topicos.map((topico, index) => (
            <Text key={index} style={{ fontSize: 16, color: '#555' }}>
              {topico.nome}: <Text style={{ fontWeight: 'bold' }}>Bloco {topico.bloco}</Text> - 
              <Text style={{ fontWeight: 'bold' }}> Sala {topico.sala}{"\n"}</Text>
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
