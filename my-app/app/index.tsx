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
    </View>
  );
}
// style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}