import { Stack, SplashScreen } from "expo-router";
import { Text } from "react-native";
import { Colors } from "../shared/tokens";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts} from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    // const insets = useSafeAreaInsets();
    const [loaded, error] = useFonts({
        FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
        FiraSansBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded]);

    useEffect(() => {
        if (error) {
            throw error
        }
    }, [error])

    if (!loaded) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <StatusBar
                    style="light"
                />
                <Stack
                    screenOptions={{
                        statusBarColor: Colors.red,
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: Colors.yellow,
                            // paddingTop: insets.top
                        }
                    }}
                >
                    <Stack.Screen name="login"/>
                    <Stack.Screen name="restore" options={{ 
                            presentation: 'modal',
                        }}
                        />
                </Stack>
            </SafeAreaProvider>
        )
    }
}