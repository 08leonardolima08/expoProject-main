import { View, Text, Image } from 'react-native';

export default function Banner() {
 return (
    <View style={{ padding: 20, borderRadius: 10, shadowColor: '#000' }}>

      <Text style={{ fontFamily: 'Arial',fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 5, marginTop:5 }}>Deseja informações de qual bloco?</Text>
      <Image 
        source={require('../../images/allBlocos.png')}
        style={{ width: '100%', height: 200, resizeMode: 'contain', borderRadius: 50 }}
        
      />
    </View>
  );
}