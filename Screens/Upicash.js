import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
 
export default function App() {
  return (

    <View style={{backgroundColor:'white',flex:1}}>
    <View style={{flexDirection:'row'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/upi.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 10, marginTop: 14 }}
          source={require('../assets/coin_icon.jpg')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
      
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
      
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>UPI Cash</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/upi.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/coin_icon.jpg')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
      
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>UPI Cash</Text>
    </View>
    </View>

    <View style={{flexDirection:'row'}}>
    <View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/upi.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 10, marginTop: 14 }}
          source={require('../assets/coin_icon.jpg')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
      
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
      
   
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>UPI Cash</Text>
    </View>
   
<View>
    <View style={styles.offer}>
   
      <View style={[styles.circle, { left: -10 }]}></View>
     
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ height: 40, width: 60, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/upi.jpg')}
        />
        <Text style={{ marginTop: 20, marginLeft: 10 }}>1174</Text>
        <Image
          style={{ height: 40, width: 30, marginLeft: 14, marginTop: 14 }}
          source={require('../assets/coin_icon.jpg')}
        />
      </View>
 
      <Text style={{ color: 'blue', fontSize: 20, marginTop: 49, marginLeft: 10 }}>$10</Text>
      
 
     
      <View style={[styles.circle, { right: -10 }]}></View>
     
    </View>
    <Text style={{marginTop:20,marginHorizontal:20}}>UPI Cash</Text>
    </View>
    </View>
   
    </View>
  );
}
 
const styles = StyleSheet.create({
  offer: {
    width: 165,
    height: 150,
    top: 30,
    left: 11,
    margin:10,
    backgroundColor: '#B6D7E4',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});