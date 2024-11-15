import { View, Text, Image, ScrollView } from 'react-native';
import { Header } from "../components/header";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

export default function BoxA() {
 return (
  <ScrollView
  style={{ flex: 1 }}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 20, paddingTop: statusBarHeight }}
  className="bg-cyan-400"
>
  <View style={{ paddingHorizontal: 16, marginTop:10  }}>
    <Header />
  </View>

  <View style={{ alignItems: 'center', marginVertical: 20 }}>
    <Image
      source={require('../images/blocoA.png')}
      style={{ width: '90%', height: 200, borderRadius: 50 }} 
      resizeMode="contain"
    />
  </View>

  <View
    style={{
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
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Térreo - (Localizado próximo ao campo) </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    A-01: Sala de aula {"\n"}
    A-02: Laboratórios de saúde{"\n"}
    Banheiros: Feminino e Masculino {"\n"}Secretaria de alunos

    </Text>
  </View>

  <View
    style={{
      backgroundColor: '#ffffff',
      marginTop: 10,
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    }}
  >
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>1º Andar </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    A-101 até 104: Laboratório de criação, concepção e expressão{"\n"}
    A-105: Laboratório de conforto ambiental{"\n"}
    A-106: Laboratório LAMP/LOB{"\n"}
    Banheiros: Feminino e Masculino

    </Text>
  </View>

  <View
    style={{
      backgroundColor: '#ffffff',
      marginTop: 10,
      padding: 16,
      marginHorizontal: 16,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    }}
  >
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>2º Andar </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    A-201: Sala de aula{"\n"}
    A-202: Laboratório de maquete (Arquitetura/Design de interiores){"\n"}
    A-203: Depósito NTI{"\n"}
    A-206: Escritório modelo (Arquitetura/Design de interiores) - Laboratórios de informática

    </Text>
  </View>
</ScrollView>
  );
}