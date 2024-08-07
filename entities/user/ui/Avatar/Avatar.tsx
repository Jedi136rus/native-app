import { StyleSheet, Image } from "react-native";
import { User } from "../../model/user.modal";

export function Avatar({ image }: {image: string | null}) {
    return (
        <>
            {image ? 
                (<Image 
                    style={styles.avatar} 
                    source={{
                        uri: image
                    }}
                />
            ):(<Image 
                    style={styles.avatar} 
                    source={require('../../../../assets/avatar.png')}
                />
            )}
    </>)
}

const styles = StyleSheet.create({

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
})