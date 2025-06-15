import {View, Text, StyleSheet} from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { Background } from '@react-navigation/elements';

export default function Pokemon(){
	const params = useLocalSearchParams();
	return <View style={styles.container}>
		<Text style={styles.text}>Pokemon {params.id}</Text>
	</View>
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
	},
	text : {
		color: 'blue',
	}
})