import { StyleSheet, Text, View } from "react-native";
import About from "./about";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}
    >
      <Text style={{color: 'yellow'}}>Edit app/index.tsx to edit this screen.</Text>
        <Link href="/about">A propos</Link>
        <Link href={{pathname: '/pokemon/[id]', params: {id: 3}}}>Pokemon 3</Link>
    </View>
  );

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
    padding: 0
  }
})
