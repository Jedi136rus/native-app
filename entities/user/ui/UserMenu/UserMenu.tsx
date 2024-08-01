import { StyleSheet, View, Image, Text } from "react-native";
import { User } from "../../model/user.modal";
import { Fonts, Gaps } from "../../../../shared/tokens";

export function UserMenu({ user }: {user: User | null}) {
    if (!user) {
        return;
    }
    return <View style={styles.container}>
            {user.photo ? 
                (<Image 
                    style={styles.avatar} 
                    source={{
                        uri: user.photo
                    }}
                />
            ):(<Image 
                    style={styles.avatar} 
                    source={require('../../../../assets/avatar.png')}
                />
            )

            }
            <Text style={styles.name}>{user.name} {user.surname}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: Gaps.g8,
        marginTop: 30,
        marginBottom: 20,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    name: {
        fontSize: Fonts.f18,
        fontFamily: Fonts.bold
    }
})