import { Dialogs, FlexboxLayout } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "Merry Christmas">,
    navigation: FrameNavigationProp<MainStackParamList, "Merry Christmas">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    const [countdown, setCountdown] = useState(getCountdownToChristmas());
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(getCountdownToChristmas());
            setTick(prevTick => {
                const newTick = (prevTick + 1) % 2;
                //console.log("Tick:", newTick); // Print tick value for debugging
                return newTick;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <stackLayout style={styles.container}>
            <label
                style={tick === 1 ? styles.cdhighlight : styles.countdown}
                textWrap={"true"} // Use textWrap as a prop, not in the style
            >
                {countdown}
            </label>

            <label
                className="fas"
                style={styles.messageBar}
                colSpan={10}
                textWrap="true"
            >
                Chloe, you light up my life like the brightest star on the Christmas tree.
                Every moment with you is a gift I cherish deeply.
                Here's a little digital celebration of our love during this magical season.
            </label>

            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Tapped!")}
                colSpan={2}
            >
                Tap me for an alert
            </button>
            <button
                style={styles.button}
                onTap={() => navigation.navigate("Two" as any, { message: "Hello!" })}
                colSpan={2}
            >
                Go to next screen
            </button>
        </stackLayout>
    );
}

function getCountdownToChristmas() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmas = new Date(currentYear, 11, 25); // December 25th
    const diff = christmas.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s until Christmas!`;
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#008000", // Changed to green for a festive look
    } as RNSStyle,
    countdown: {
        textAlignment: "center",
        fontSize: 20,
        color: "#ffffff", // Changed to white for better readability
        marginBottom: 20,
        flexWrap: "wrap",
        maxWidth: "90%",
    } as RNSStyle,
    cdhighlight: {
        textAlignment: "center",
        fontSize: 20,
        marginBottom: 20,
        flexWrap: "wrap",
        maxWidth: "90%",
        fontWeight: "bold", // Add bold styling
        color: "#ff0000", // Highlight color for the tick
    } as RNSStyle,
    messageBar: {
        textAlignment: "center",
        fontSize: 18,
        color: "#ffffff", // Changed to white for better readability
        marginBottom: 20,
        flexWrap: "wrap",
        padding: 10,
        maxWidth: "90%",
        lineHeight: 24, // Improves text readability
    } as RNSStyle,
    buttonContainer: {
        width: "100%",
        marginTop: 20,
        flexWrap: "wrap",
    } as RNSStyle,
    button: {
        fontSize: 14,
        color: "#ffffff", // Changed to white for a festive look
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#ff0000", // Changed to red for a festive look
        textAlignment: "center",
    } as RNSStyle,
});
