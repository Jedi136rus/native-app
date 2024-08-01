import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "../../../../shared/tokens";
import { CustomLink } from "../../../../shared/CustomLink/CustomLink";
import { CloseDrawer } from "../../../../features/layout/ui/CloseDrawer/CloseDrawer";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../../auth/model/auth.state";
import { loadProfileAtom } from "../../../user/model/user.state";
import { useEffect } from "react";
import { UserMenu } from "../../../user/ui/UserMenu/UserMenu";
import { MenuItem } from "../MenuItem/MenuItem";

const MENU = [
    { 
        text: 'Курсы', 
        icon: require('../../../../assets/profile.png'),
        path: 'index'
    },
    { 
        text: 'Профиль', 
        icon: require('../../../../assets/courses.png'),
        path: 'profile'
    },
]

export function CustomDrawer(props: DrawerContentComponentProps) {
    const logout = useSetAtom(logoutAtom);
    const [profile, loadProfile] = useAtom(loadProfileAtom);

    useEffect(() => {
        loadProfile();
    }, [])

    return <DrawerContentScrollView {...props}
        contentContainerStyle={styles.scrolView}
    >
        <View style={styles.content}>
            <CloseDrawer {...props.navigation}/>
            <UserMenu user={profile.profile}/>
            {MENU.map((menu) => (
                <MenuItem 
                    key={menu.path}
                    {...menu} 
                    drawer={props}/>
            ))}
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