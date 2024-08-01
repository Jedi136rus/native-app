import { DrawerContentComponentProps, DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { ReactNode, useState } from "react";
import { Pressable, PressableProps, Text, View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { Colors, Fonts, Gaps } from "../../../../shared/tokens";

interface MenuItemProps {
    drawer: DrawerContentComponentProps;
    icon: ImageSourcePropType;
    text: string;
    path: string
}

export function MenuItem({
    drawer, 
    icon, 
    text,
    path, 
    ...props
}: MenuItemProps & PressableProps) {
    const [clicked, setClicked] = useState<boolean>(false);
    const isActive = drawer.state.routes[drawer.state.index].name === path;
    return <Pressable 
        {...props} 
        onPress={() => drawer.navigation.navigate(path)}
        onPressIn={() => setClicked(true)}
        onPressOut={() => setClicked(false)}
        >
            <View style={{...styles.menu, 
                borderColor: isActive ? Colors.redDark: Colors.darkYeallow,
                backgroundColor: clicked || isActive? Colors.gray: Colors.darkYeallow}}>
                <Image style={styles.icon} source={icon}/>
                <Text style={styles.text}>{text}</Text>
            </View>
    </Pressable>
}

const styles = StyleSheet.create({
    icon: {
        height: 40,
        width: 40
    },
    menu: {
        flexDirection: 'row',
        gap: Gaps.g20,
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignItems: 'center',
        borderRightWidth: 5
    },
    text: {
        fontSize: Fonts.f18,
        fontFamily: Fonts.regular
    }

})