import { Image, StyleSheet, View, Text } from "react-native";
import { StudentCourseDescription } from "../../model/course.model";
import { Chip } from "../../../../shared/Chip/Chip";
import { ButtonC } from "../../../../shared/Button/Button";
import { Colors, Fonts, Gaps, Radius } from "../../../../shared/tokens";

export function CourseCard({ image, title, courseOnDirection}: StudentCourseDescription) {
    return <View style={styles.card}>
        <Image 
            source={{uri: image}} 
            height={200}
            style={styles.image}
            />
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.chips}>
                    {courseOnDirection.length > 0 && courseOnDirection.map(c => (
                        <Chip text={c.direction.name}/>
                    ))}
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonC text='Купить'/>
            </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        borderRadius: Radius.r10,
        backgroundColor: Colors.yellow,
    },
    image: {
        borderRadius: Radius.r10,
        borderBottomLeftRadius: 0,
        borderBottomEndRadius: 0
    },
    title: {
        fontSize: Fonts.f20,
        color: Colors.red,
        fontFamily: Fonts.regular,
        marginBottom: 12
    },
    chips: {
        flexDirection: 'row',
        gap: Gaps.g8
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 18
    },
    footer: { 
        backgroundColor: Colors.gray,
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderBottomLeftRadius: 10,
        borderBottomEndRadius: 10
    },
});