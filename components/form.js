import { StyleSheet, View } from "react-native";
import { isStringEmpty } from "../utils";
import MainButton from "./main-button";
import Visible from "./visible";
import FormError from "./form-error";

export default function Form({ children, onSubmit, error }) {
    const isErrorVisible = !isStringEmpty(error);

    return (
        <View style={styles.form}>
            {children}
            <MainButton onPress={onSubmit} label="Save" />
            <Visible visible={isErrorVisible}>
                <FormError text={error} />
            </Visible>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        paddingTop: "1rem",
    },
});
