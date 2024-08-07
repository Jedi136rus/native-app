import { useEffect, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation'

export function useScreenOrientation() {
    const [orientation, setOrierntation] = useState<ScreenOrientation.Orientation>();
   
    useEffect(() => {
        ScreenOrientation.getOrientationAsync()
            .then((o) => setOrierntation(o));
        ScreenOrientation.addOrientationChangeListener((e) => {
            setOrierntation(e.orientationInfo.orientation);
        });
        return () => {
            ScreenOrientation.removeOrientationChangeListeners();
        }
    }, [])
   
    return orientation;
}