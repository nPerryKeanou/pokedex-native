import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red',
      }}
    >
      <Text style={{color: 'yellow'}}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
