import { View, Text, StyleSheet } from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Tab() {
  return (
    <View
      style={[
        styles.align,
        styles.border,
        styles.mar,
        styles.pad,
        styles.justify,
      ]}
    >
      <Text style={styles.innertext}>LoRaWAN Kerala</Text>
      <View style={styles.align}>
        <AntDesign name="infocirlce" size={24} color="red" />
        <MaterialIcons name="double-arrow" size={24} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innertext: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  border: {
    borderWidth: 2,
    borderColor: "red",
  },
  pad: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  mar: {
    margin: 10,
  },
  align: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  justify: {
    justifyContent: "space-around",
  },
});
