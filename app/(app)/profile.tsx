import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import ImageUploader from "../../shared/ImageUploader/ImageUploader";
import { Gaps } from "../../shared/tokens";
import { Avatar } from "../../entities/user/ui/Avatar/Avatar";
import { useAtom } from "jotai";
import { updateProfileAtom } from "../../entities/user/model/user.state";
import { ButtonC } from "../../shared/Button/Button";
import * as Sharing from 'expo-sharing'


export default function Profile() {
    const [image, setImage] = useState<string|null>(null);
    const [profile, updateProfile] = useAtom(updateProfileAtom);

    const shareProfile = async () => {
        const isSharingAvailable = await Sharing.isAvailableAsync();
        if (!isSharingAvailable) {
            return
        }
        await Sharing.shareAsync('https://t.me/roger36rus', {
            dialogTitle: 'Поделиться профилем'
        })
    }

    const submitProfile = () => {
        if (!image) return;
        updateProfile({photo: image})
    }

    useEffect(() => {
        if (profile && profile.profile?.photo) {
            setImage(profile?.profile?.photo);
        }
    }, [profile])

    return (
        <View>
            <View style={styles.container}>
                <Avatar image={image}/>
                <ImageUploader onUpload={setImage} onError={(e) => console.log(e)}/>
            </View>
            <ButtonC text="Сохранить" onPress={submitProfile} style={{paddingBottom: 20}}/>
            <ButtonC text="Поделиться" onPress={shareProfile} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    container: {
        flexDirection: 'row',
        gap: Gaps.g20,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20
    }
})