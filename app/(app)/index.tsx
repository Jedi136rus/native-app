import { useAtomValue, useSetAtom } from "jotai";
import { View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { logoutAtom } from "../../entities/auth/model/auth.state";
import { courseAtom, loadCourseAtom } from "../../entities/course/model/course.state";
import { useEffect } from "react";
import { CourseCard } from "../../entities/course/ui/CourseCard/CourseCard";
import { Colors, Gaps } from "../../shared/tokens";
import { StudentCourseDescription } from "../../entities/course/model/course.model";
import { ButtonC } from "../../shared/Button/Button";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device'
import { Constants } from "expo-constants";


export default function MyCourses(){
    const { isLoading, error, courses} = useAtomValue(courseAtom)
    const loadCourse = useSetAtom(loadCourseAtom)

    useEffect(() => {
        loadCourse();
        console.log(courses)
    }, [])

    const renderCourse = ({item}: {item: StudentCourseDescription}) => {
        return <CourseCard {...item}/>
    };

    const allowsNotification = async () => {
        const settings = await Notifications.getPermissionsAsync();
        return (
            settings.granted || settings.ios?.status == Notifications.IosAuthorizationStatus.PROVISIONAL
        );
    };

    const requestPermissions = async () => {
        return Notifications.requestPermissionsAsync({
            ios: {
                allowAlert: true,
                allowBadge: true,
                allowSound: true
            }
        })
    }

    const scheduleNotification = async () => {
        const granted = await allowsNotification();
        if (!granted) {
            await requestPermissions();
        }
        if (Device.isDevice) {
            // const token = await Notifications.getExpoPushTokenAsync({
                // projectId: Constants.expoConfig?.extra?.eas.projectId,
            // })
            // console.log(token);
        }
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Не забудь пофиксить баги',
                body: 'Не делай баги вообще!',
                data: { allias: 'typescript' }
            },
            trigger: {
                seconds: 5,
            }
        })
    }

    return (
        // <ScrollView style={styles.wrapper}>
        //     <View style={styles.wrapper}>
        //         {courses.length > 0 && courses.map((c) => <CourseCard {...c} key={c.id}/>)}
        //     </View>
        // </ScrollView>
        <>
            {isLoading && <ActivityIndicator size="large" color={Colors.red}/>}
            <ButtonC text="Напомнить" onPress={scheduleNotification}/>
            {/* {courses.length > 0 && <FlatList 
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={loadCourse}/>
                }
                data={courses} 
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCourse}
            />} */}
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        gap: Gaps.g20,
        padding: 20,
    },
})