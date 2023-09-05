import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ThemeContext } from "../contexts";
import Modal from "./modal";
import IconButton from "./icon-button";
import { Times } from "react-native-unicons";

export default function Dialog({ title, children, onClose }) {
    const { dialogBackground, normalText } = useContext(ThemeContext);

    return (
        <Modal>
            <View
                style={{
                    ...styles.dialog,
                    backgroundColor: dialogBackground,
                }}
            >
                <View style={styles.header}>
                    <Text
                        style={{
                            ...styles.title,
                            color: normalText,
                        }}
                    >
                        {title}
                    </Text>
                    <IconButton onPress={onClose}>
                        <Times color={normalText} />
                    </IconButton>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    dialog: {
        height: "90%",
        width: "90%",
        borderRadius: 40,
        paddingVertical: "2.5rem",
        paddingHorizontal: "2rem",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
});
