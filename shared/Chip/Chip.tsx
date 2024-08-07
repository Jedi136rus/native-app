import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

export function Chip({ text }: {text: string}) {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: Colors.red,
        borderRadius: Radius.r17,
        borderWidth: 1,
        color: Colors.gray
    },
    text: {
        fontFamily: Fonts.regular,
        fontSize: Fonts.f16,
        color: Colors.red
    }
}
)