import { useContext } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { ThemeContext } from "../contexts";
import { isStringEmpty } from "../utils";
import Visible from "./visible";
import FormError from "./form-error";

export default function Input({
    label,
    value,
    onValueChange,
    autoFocus = false,
    placeholder = "",
    error = "",
    isMultiline = false,
}) {
    const { errorText, mainBackground, inputBorder, normalText } =
        useContext(ThemeContext);
    const hasError = !isStringEmpty(error);

    function getInputBackgroundStyle() {
        const inputBackgroundStyle = {
            ...styles.inputBackground,
            backgroundColor: mainBackground,
            borderColor: inputBorder,
        };

        if (hasError) {
            inputBackgroundStyle.borderColor = errorText;
        }

        return inputBackgroundStyle;
    }

    return (
        <View style={styles.container}>
            {label && (
                <Text
                    style={{
                        ...styles.label,
                        color: normalText,
                    }}
                >
                    {label}
                </Text>
            )}
            <View style={getInputBackgroundStyle()}>
                <TextInput
                    autoFocus={autoFocus}
                    textAlignVertical="top"
                    value={value}
                    numberOfLines={5}
                    onChangeText={onValueChange}
                    style={{
                        outline: "none",
                        color: normalText,
                    }}
                    placeholder={placeholder}
                    multiline={isMultiline}
                />
            </View>
            <Visible visible={hasError}>
                <FormError text={error} style={styles.error} />
            </Visible>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBackground: {
        padding: "0.9rem",
        borderRadius: 10,
        marginBottom: 15,
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
    },
    error: {
        marginTop: 0,
    },
    label: {
        marginBottom: 10,
        fontWeight: "bold",
    },
    container: {
        flexGrow: 2,
    },
});
