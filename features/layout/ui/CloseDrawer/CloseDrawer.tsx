import { View, Pressable, StyleSheet, } from "react-native";
import CloseIcon from "../../../../assets/icons/closeIcon";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

export function CloseDrawer (navigation: DrawerNavigationHelpers) {
    return (
        <Pressable onPress={() => navigation.closeDrawer()}>
            <View style={styles.button}>
                <CloseIcon />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 10,
    }
})