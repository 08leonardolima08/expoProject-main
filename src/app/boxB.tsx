import { View, Text, Image, ScrollView } from 'react-native';
import { Header } from "../components/header";
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

export default function BoxB() {
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
      source={require('../images/blocoB.png')} 
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
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Térreo (Localizado entre blocos A e B) </Text>
    <Text style={{ fontSize: 16, color: '#555' }}>
    B-01 e B-02: Laboratório de semiologia e semiotécnica{"\n"}
    B-03, 07 e 08: Laboratório de anatomia sintética{"\n"}
    B-04: Arquivo{"\n"}
    B-05: Laboratório de estudos/monitoria{"\n"}
    B-06: Sala dos técnicos B-09 e B-10: Laboratório de anatomia animal

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
    B-101: Depósito{"\n"}
    B-102: Xerox{"\n"}
    B-103: Sala de aula{"\n"}
    B-104: Laboratório da criança{"\n"}
    B-105: Clínica de psicologia (SPA){"\n"}
    B-106: Sala dos estagiários do SPA{"\n"}
    B-107: Sala de aula{"\n"}
    B-108: Sala de aula{"\n"}
    B-109: Laboratório de sistemas embarcados{"\n"}
    B-110: Arquivo

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
    B-201: Escritório modelo (Design de moda e design gráfico)
    B-202: Estúdio de TV{"\n"}
    B-205: NTI Laboratório de informática{"\n"}
    B-209: Laboratório de Macintosh

    </Text>
  </View>
</ScrollView>
  );
}