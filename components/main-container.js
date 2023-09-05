import { View, StyleSheet } from "react-native";

import TopBar from "./top-bar";
import Content from "./content";
import { useVisible } from "../hooks";
import { useContext } from "react";
import { NotesContext, SetNoteAction, ThemeContext } from "../contexts";
import NoteDialog from "./note-dialog";

export default function MainContainer({ children, title }) {
    const { note, dispatch } = useContext(NotesContext);
    const { mainBackground } = useContext(ThemeContext);
    const [isNoteDialogVisible, showNoteDialog, hideNoteDialog] =
        useVisible(false);
    const [isEditDialogVisible, showEditDialog, hideEditDialog] =
        useVisible(false);

    function handleNoteDialogClose() {
        dispatch({ type: SetNoteAction, value: null });
        hideNoteDialog();
    }

    return (
        <View
            style={{
                ...styles.mainContainer,
                backgroundColor: mainBackground,
            }}
        >
            <TopBar onAdd={showNoteDialog} title={title} />
            <Content>{children}</Content>
            <NoteDialog
                visible={isNoteDialogVisible || note}
                onClose={handleNoteDialogClose}
                note={note}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: "1rem",
    },
});
