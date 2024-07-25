import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { Colors } from "../tokens";

export function Input(props: TextInputProps) {
    return (
        <TextInput 
        style={styles.input}
        placeholderTextColor={Colors.redDark}
        {...props}/>
    )
}

const styles = StyleSheet.create({
    input: {
        color: Colors.redDark,
        paddingVertical: 20,
        backgroundColor: Colors.gray,
        paddingHorizontal: 24,
        borderRadius: 10,
        fontSize: 16,
    }
})