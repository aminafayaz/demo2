<<<<<<< Updated upstream
import {StyleSheet, Text, View } from "react-native";
const styles= StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: 'red',
  }
})
export default function Index() {
  return (
    <View style={styles.border}>
      <Text>LoRaWAN Kerala</Text>
=======
import { Text, View ,StyleSheet} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Index() {
  return (
    <View>
      <Text style = {styles.innertext}>LoRaWAN Kerala</Text>
>>>>>>> Stashed changes
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
})