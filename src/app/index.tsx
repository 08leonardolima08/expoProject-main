import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from 'expo-constants'
import Banner from "../components/banner";
import {Link} from "expo-router"

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
    style={{ flex: 1 }} 
    className= "bg-cyan-400"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>
        <Banner/>
        
        <Link 
          href="/boxA" 
          style={{
            borderWidth: 1,
            paddingVertical: 30,
            width: "70%", 
            marginHorizontal: 58,
            marginBottom: 20,
            height: "10%",
            backgroundColor: '#f8f9fa', 
            borderRadius: 20, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center'
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco A
          </Text>
        </Link>

        <Link 
          href="/boxB" 
          style={{
            borderWidth: 1,
            paddingVertical: 30,
            width: "70%",
            marginHorizontal: 58,
            marginBottom: 20,
            height: '10%',
            backgroundColor: '#f8f9fa', 
            borderRadius: 20, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex', 
            textAlign: 'center'  
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco B
          </Text>
        </Link>
        
        <Link 
          href="/boxC" 
          style={{
            borderWidth: 1,
            paddingVertical: 30,
            width: "70%",
            marginHorizontal: 58,
            marginBottom: 20,
            height: '10%',
            backgroundColor: '#f8f9fa', 
            borderRadius: 20, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center'
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco C
          </Text>
        </Link>

        <Link 
          href="/boxD" 
          style={{
            borderWidth: 1,
            paddingVertical: 30,
            width: "70%",
            marginHorizontal: 58,
            marginBottom: 20,
            height: '10%',
            backgroundColor: '#f8f9fa', 
            borderRadius: 20, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center'
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco D
          </Text>
        </Link>

        <Link 
          href="/boxE" 
          style={{
            borderWidth: 1,
            paddingVertical: 30,
            width: "70%",
            marginHorizontal: 58,
            marginBottom: 20,
            height: '10%',
            backgroundColor: '#f8f9fa', 
            borderRadius: 20, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',
            alignItems: 'center', 
            display: 'flex',
            textAlign: 'center'
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#000' }}>
            Bloco E
          </Text>
        </Link>

        <Link 
          href="/disciplinas" 
          style={{
            borderWidth: 2,
            borderColor: 'white',
            paddingVertical: 30,
            width: "70%",
            marginHorizontal: 58,
            marginBottom: 20,
            height: '10%',
            backgroundColor: '#B400FF', 
            borderRadius: 20, 
            shadowColor: '#000', 
            shadowOpacity: 0.2, 
            shadowOffset: { width: 0, height: 2 },
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center'
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold",color: '#F8F7FB' }}>
            Disciplinas
          </Text>
        </Link>

      </View>
      
    </ScrollView>
  );
}
