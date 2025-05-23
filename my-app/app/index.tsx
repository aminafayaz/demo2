import {StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.border}>
      <Text style = {styles.innertext}>LoRaWAN Kerala</Text>
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