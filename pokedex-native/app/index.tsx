import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'yellow'}}>Edit app/index.tsx to edit this screen.</Text>
        <Link href="/about">A propos</Link>
        <Link href={{pathname: '/pokemon/[id]', params: {id: 3}}}>Pokemon 3</Link>
    </SafeAreaView>
  );

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'red',
  }
})
