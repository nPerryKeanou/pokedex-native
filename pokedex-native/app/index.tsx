import { Text, View } from "react-native";
import About from "./about";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red',
        padding: 0
      }}
    >
      <Text style={{color: 'yellow'}}>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">A propos</Link>
    </View>
  );
}
