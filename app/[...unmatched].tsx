import { Image, Text, View, StyleSheet } from "react-native";
import { CustomLink } from "../shared/CustomLink/CustomLink";
import { Fonts, Gaps } from "../shared/tokens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UnmatchedCustom(){
    return <SafeAreaView style={styles.container}>
                <View style={styles.contant}>
                    <Image
                        source={require('../assets/404.png')}
                        style={styles.logoStyle}
                    />
                    <Text style={styles.text}>
                        Ооо... что-то пошло не так.
                        Попробуйте вернуться на главный экран приложения
                    </Text>
                
                    <CustomLink text='Перейдите на главную страницу' href={'/'}/>
                </View>
            </SafeAreaView>
}

const styles = StyleSheet.create({
    logoStyle: {
        width: 300,
        height: 300,
        },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 55
    },
    contant: {
        alignItems: 'center',
        gap: Gaps.g50
    },
    text: {
        alignContent: 'center',
        fontSize: Fonts.f18,
        fontFamily: Fonts.regular,
        textAlign: 'center'
    },
})