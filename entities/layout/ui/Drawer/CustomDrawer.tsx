import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "../../../../shared/tokens";
import { CustomLink } from "../../../../shared/CustomLink/CustomLink";
import { CloseDrawer } from "../../../../features/layout/ui/CloseDrawer/CloseDrawer";
import { useSetAtom } from "jotai";
import { logoutAtom } from "../../../auth/model/auth.state";

export function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(logoutAtom);

    return <DrawerContentScrollView {...props}
        contentContainerStyle={styles.scrolView}
    >
        <View style={styles.content}>
            <CloseDrawer {...props.navigation}/>
            <Text>Текст</Text>
        </View>
        <View style={styles.footer}>
            <CustomLink text='Выход' onPress={() => logout()} href={'/login'}/>
            <Image 
                source={require('../../../../assets/pngwing.com.png')}
                style={styles.logoStyle}
                // resizeMode='contain'
            />
        </View>
    </DrawerContentScrollView>
}

const styles = StyleSheet.create({
    scrolView: {
        flex: 1,
        backgroundColor: Colors.darkYeallow
    },
    logoStyle: {
        width: 130,
        height: 80,
      },
    content: {
        flex: 1,
    },
    footer: {
        gap: 20,
        marginBottom: 40,
        alignContent: 'center',
        alignItems: 'center'
    }
})