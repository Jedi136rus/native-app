import { useState, useEffect } from 'react'
import { ErrorNotificationProps } from './ErrorNotification.props'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { Colors, Fonts } from '../tokens'

export function ErrorNotification ({ error }: ErrorNotificationProps) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const animatedValue = new Animated.Value(-100);

    const onEnter = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        if (!error) {
            return
        } 
        setIsShow(true);
        const timerId = setTimeout(() => {
            setIsShow(false);
        }, 3000);
        return () => {
            clearTimeout(timerId);
        }
    }, [error])

    if (!isShow) {
        return <></>
    }

    return (
        <Animated.View style={{...styles.error, transform: [
            { translateY: animatedValue}
        ]}} onLayout={onEnter}>
            <Text style={styles.errorText}>{error}</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.red,
        padding: 15,
        top: 30
    },
    errorText: {
        fontSize: Fonts.f16,
        fontFamily: Fonts.bold,
        color: 'white',
        textAlign: 'center'
    }
})