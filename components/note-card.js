import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { ThemeContext } from "../contexts";
import { useContext } from "react";

export default function NoteCard({ title, onPress }) {
    const { cardBackground, normalText } = useContext(ThemeContext);

    return (
        <TouchableHighlight onPress={onPress}>
            <View
                style={{
                    ...styles.card,
                    backgroundColor: cardBackground,
                }}
            >
                <Text
                    style={{
                        ...styles.title,
                        color: normalText,
                    }}
                >
                    {title}
                </Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.1rem",
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
});
