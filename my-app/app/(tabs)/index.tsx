import { View, Text, StyleSheet } from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from 'expo-router';
// import { Button } from '@react-navigation/elements';
import { useRouter } from 'expo-router';

export default function Tab() {
    const router = useRouter();

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
      <View style={[styles.align,styles.justify]}>
        <AntDesign name="infocirlce" size={24} color="red" />
        <Link href={"/(tabs)/param"}>Param</Link>
        <MaterialIcons name="double-arrow" size={24} color="red" onPress={()=> router.navigate('/parameterPage')}/>
              {/* <Link href="/parameterPage">About</Link> */}

      </View>
      {/* <Button onPress={() => router.navigate('/parameterPage')}>Go to About</Button> */}
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
  justify1: {
    justifyContent: "space-evenly",
  },
});
