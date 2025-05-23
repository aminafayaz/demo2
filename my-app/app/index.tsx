import {StyleSheet, Text, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {
  return (
<<<<<<< Updated upstream
    <View style={styles.border}>

      <Text style = {styles.innertext}>LoRaWAN Kerala</Text>
      <View>
        <AntDesign name="infocirlce" size={24} color="red" />
        <MaterialIcons name="double-arrow" size={24} color="red" />
=======
    <View style={[styles.align,styles.border, styles.mar, styles.pad,styles.justify]}>
      <View style={[styles.align]}>
        <Text style = {styles.innertext}>LoRaWAN Kerala</Text>
      </View>
      <View style={{alignItems: 'flex-end', flexDirection: 'column'}}>
        <Text style = {styles.innertext}>Ker</Text>

>>>>>>> Stashed changes
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
  },
  pad: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  mar:{
    margin: 10,
  },
  align:{
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  justify:{
    justifyContent: 'space-around',
  }
})