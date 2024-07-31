// /restore

import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";


export default function Restore(){
    return <View>
        <Stack.Screen 
            options={{
                title: 'Восстановить пароль',
            }}
        />
        <Link href={'/'}>
            <Text>Назад</Text>
        </Link>
    </View>
}