import { TextInput, TextInputProps, StyleSheet, Pressable, View } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";
import { useState } from "react";
import EyeClosed from "../../assets/icons/eye-closed";
import EyeOpened from "../../assets/icons/eye-opened";

export function Input({isPassword, ...props}: TextInputProps & { isPassword?: boolean}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    
    return (
        <View>
            <TextInput 
                style={styles.input}
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholderTextColor={Colors.redDark}
                {...props}/>
            {isPassword && 
            <Pressable 
                style={styles.eyeIcon}
                onPress={() => setIsPasswordVisible(state => !state)}
            >
                {isPasswordVisible ? <EyeClosed/>: <EyeOpened/>}
            </Pressable>}
        </View>
    )   
}

const styles = StyleSheet.create({
    input: {
        color: Colors.redDark,
        paddingVertical: 20,
        backgroundColor: Colors.gray,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: Fonts.f16,
        fontFamily: Fonts.bold
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 15,
        // paddingVertical: 10 
    }
})