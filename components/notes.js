import { View, StyleSheet } from "react-native";
import NoteCard from "./note-card";
import { useContext } from "react";
import { NotesContext, SetNoteAction } from "../contexts";

export default function Notes({ notes }) {
    const { dispatch } = useContext(NotesContext);

    function onNotePressed(note) {
        dispatch({ type: SetNoteAction, value: note });
    }

    return (
        <View style={styles.list}>
            {notes.map((note) => {
                return (
                    <NoteCard
                        key={note.id}
                        title={note.title}
                        onPress={() => onNotePressed(note)}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        display: "flex",
        flex: 29,
        marginTop: "1.5rem",
    },
});
