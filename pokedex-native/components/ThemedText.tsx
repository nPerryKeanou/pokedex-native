import { StyleSheet, Text, type TextProps } from "react-native"; //props créé par composant Text

const style = StyleSheet.create({
    Headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
    },
    Subtitle3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "bold",
    },
    Subtitle2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "bold",
    },
    Subtitle1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "bold",
    },
    Body3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "regular",
    },
    Body2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "regular",
    },
    Body1: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: "regular",
    },
    Caption: {
        fontSize: 8,
        lineHeight: 16,
        fontWeight: "regular",
    }
})


type props = TextProps & {
    variant ?: string,  /*props créé manuellement */
    color ?: string     /*props créé manuellement */
}


export function ThemedText({variant, color, ...rest}: props){ //on va extraire la variant et la color et toutes les autres propriété seront dans une variables appelé ' ...rest'
    return <Text {...rest}/> //return la balise  <Text> de reactNative en lui passant l'ensemble des propriétés
}


