import { View, Text, ScrollView } from 'react-native';
import { Header } from "../components/header";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

export default function Disciplinas() {
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


  <View
    style={{
      marginTop:20,
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
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Análise e Desenvolvimento de Sistemas </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
        Tópicos de Big Data em Python: 
        <Text style={{ fontWeight: 'bold' }}> Bloco A </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 205{"\n"}</Text>
        {"\n"}
        Paradigmas de Linguagens de Programação em Python: 
        <Text style={{ fontWeight: 'bold' }}> Bloco E </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 103{"\n"}</Text>
        {"\n"}
        Banco de Dados:
        <Text style={{ fontWeight: 'bold' }}> Bloco E </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 103{"\n"}</Text>
        {"\n"}
        Estrutura de Dados: 
        <Text style={{ fontWeight: 'bold' }}> Bloco B </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 205{"\n"}</Text>
        {"\n"}
        Aplic. de Cloud, Iot e Indústria 4.0 em Python: 
        <Text style={{ fontWeight: 'bold' }}> Bloco E </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 105{"\n"}</Text>
        {"\n"}
        Desenvolvimento Rápido de Aplicações em Python: 
        <Text style={{ fontWeight: 'bold' }}> Bloco E </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 102{"\n"}</Text>
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
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Ciência da Computação </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
        Tópicos de Big Data em Python:
        <Text style={{ fontWeight: 'bold' }}> Bloco A </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 205{"\n"}</Text>
        {"\n"}
        Algoritmos em Grafos:
        <Text style={{ fontWeight: 'bold' }}> Bloco B </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 207 {"\n"}</Text>
        {"\n"}
        Programação Para Dispositivos Móveis em Android:
        <Text style={{ fontWeight: 'bold' }}> Bloco E </Text> - 
        <Text style={{ fontWeight: 'bold' }}> 103</Text>
      </Text>
  </View>

</ScrollView>
    
   
  );
}