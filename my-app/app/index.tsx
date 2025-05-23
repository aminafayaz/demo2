import {StyleSheet, Text, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {
  return (
    <View style={styles.border}>

      <Text style = {styles.innertext}>LoRaWAN Kerala</Text>
      <View>
        <AntDesign name="infocirlce" size={24} color="red" />
        <MaterialIcons name="double-arrow" size={24} color="red" />
      </View>
    </View>
  );
}
// style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}


const styles = StyleSheet.create({
  innertext :{
    fontSize :25,
    fontWeight :'bold',
    color: 'blue',
    textAlign: 'center'
  },
   border: {
    borderWidth: 2,
    borderColor: 'red',
  }
})