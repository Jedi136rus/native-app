import { useSetAtom } from "jotai";
import { View, Text } from "react-native";
import { ButtonC } from "../../shared/Button/Button";
import { logoutAtom } from "../../entities/auth/model/auth.state";

export default function MyCourses(){
    const logout = useSetAtom(logoutAtom)

    return (
    <View>
        <Text>index</Text>
        <ButtonC text="Выход" onPress={logout}/>
    </View>
    );
}