import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BrightnessHalf, Plus } from "react-native-unicons";

import IconButton from "./icon-button";
import { ThemeContext } from "../contexts";

export default function TopBar({ onAdd, title }) {
    const { normalText, toggleDarkTheme } = useContext(ThemeContext);
    const iconStyle = { color: normalText };

    return (
        <View style={styles.topBar}>
            <Text
                style={{
                    ...styles.title,
                    color: normalText,
                }}
            >
                {title}
            </Text>
            <View style={styles.icons}>
                <IconButton onPress={toggleDarkTheme}>
                    <BrightnessHalf style={iconStyle} />
                </IconButton>
                <IconButton onPress={onAdd}>
                    <Plus style={iconStyle} />
                </IconButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        marginVertical: "1rem",
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "row",
        flex: "1",
        alignItems: "center",
    },
    title: {
        fontSize: "2rem",
        fontWeight: "bold",
    },
    icons: {
        marginTop: "10px",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        gap: "1rem",
    },
});
