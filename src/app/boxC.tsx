import { View, Text, Image, ScrollView } from 'react-native';
import { Header } from "../components/header";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

export default function BoxC() {
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
      source={require('../images/blocoC.png')}
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
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Térreo (Próximo a praça de alimentação) </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    Coordenação dos Cursos{"\n"}
    NAE: Núcleo{"\n"}
    NAAP: Núcleo de Apoio e Atendimento Psicopedagógico{"\n"}
    CEP: Comitê de Ética Em Pesquisa de Extensão{"\n"}
    CPA: Comissão Própria de Avaliação{"\n"}
    Coordenação de Regulação{"\n"}
    Gerência Administrativa Financeira{"\n"}
    NAE: Núcleo de Apoio Ao Estudante{"\n"}
    Gestão da Unidade

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
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Térreo (Dentro do bloco) </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    C-01 e 02: Sala de Aula{"\n"}
    C-03: Laboratório de Microscopia{"\n"}
    C-04: Laboratório de Centro de Moda{"\n"}
    C-05: Arquivo{"\n"}
    C-06: Laboratório de Projetos{"\n"}
    C-07: Laboratório de Ateliê de Modelagem{"\n"}
    C-08: Refeitório dos Colaboradores{"\n"}
    Vestiários Feminino e Masculino (Colaboradores)

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
    C-101: Laboratório de Cinesioterapia{"\n"}
    C-102: Laboratório de Criação, Concepção e Expressão{"\n"}
    C-103 e 104: Sala de Aula{"\n"}
    C-105: Laboratório de Eletrotermofototerapia/ Órtese e Prótese{"\n"}
    C-106 até 108 - Sala de Aula{"\n"}
    C-109: Coordenação de Laboratórios de Saúde{"\n"}
    C-110: Laboratório de Avaliação Física, Biomecânica e Fisiologia do Exercício{"\n"}
    C-111: Laboratório de Estética Capilar{"\n"}
    C-112: Laboratório de Radiologia{"\n"}
    C-113: Laboratório de Estética Facial e Corporal{"\n"}
    C-114: Laboratório de Psicomotricidade{"\n"}
    Depósito Banheiros Feminino e Masculino

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
    C-201 até 210: Sala de Aula{"\n"}
    Banheiros Feminino e Masculino{"\n"}
    Depósito

    </Text>
  </View>

</ScrollView>
  );
}