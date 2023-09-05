import { useContext, useState } from "react";
import Dialog from "./dialog";
import Form from "./form";
import Input from "./input";
import Visible from "./visible";
import { Text, StyleSheet, View } from "react-native";
import {
    DeleteNoteAction,
    EditNoteAction,
    NotesContext,
    RegisterNoteAction,
    SetNoteAction,
    ThemeContext,
} from "../contexts";
import MainButton from "./main-button";
import { useVisible } from "../hooks";

export default function NoteDialog({ visible, onClose, note }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { normalText } = useContext(ThemeContext);
    const { dispatch } = useContext(NotesContext);
    const [isEditing, setIsEditing] = useState(false);

    function handleSubmit() {
        const newNote = { title, description };
        if (isEditing) {
            newNote.id = note.id;
            editNote(newNote);
        } else {
            registerNote(newNote);
        }
    }

    function registerNote(note) {
        dispatch({ type: RegisterNoteAction, value: note });
        closeDialog();
    }

    function editNote(note) {
        dispatch({ type: EditNoteAction, value: note });
        closeDialog();
    }

    function turnOnEditMode() {
        setIsEditing(true);
        setTitle(note.title);
        setDescription(note.description);
    }

    function clearForm() {
        setTitle("");
        setDescription("");
    }

    function closeDialog() {
        setIsEditing(false);
        clearForm();
        onClose();
    }

    function deleteNote() {
        dispatch({ type: DeleteNoteAction, value: note });
        closeDialog();
    }

    return (
        <Visible visible={visible}>
            {note && !isEditing ? (
                <Dialog title={note.title} onClose={closeDialog}>
                    <Text style={{ ...styles.plainContent, color: normalText }}>
                        {note.description}
                    </Text>
                    <View style={styles.buttons}>
                        <MainButton
                            label="Edit"
                            onPress={turnOnEditMode}
                            style={styles.button}
                        />
                        <MainButton
                            label="Delete"
                            onPress={deleteNote}
                            style={styles.button}
                        />
                    </View>
                </Dialog>
            ) : (
                <Dialog
                    title={isEditing ? "Edit note" : "Add note"}
                    onClose={closeDialog}
                >
                    <Form onSubmit={handleSubmit}>
                        <Input
                            label="Title"
                            autoFocus={true}
                            value={title}
                            onValueChange={setTitle}
                            placeholder="A keyword or a concept "
                        />
                        <Input
                            label="Description"
                            value={description}
                            onValueChange={setDescription}
                            isMultiline={true}
                        />
                    </Form>
                </Dialog>
            )}
        </Visible>
    );
}

const styles = StyleSheet.create({
    plainContent: {
        marginVertical: "1rem",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
    },
    button: {
        flex: 1,
    },
});
