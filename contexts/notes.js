import { useReducer, createContext } from "react";
import { useTurnOffFlag } from "../hooks";
import {
    DeleteNoteAction,
    EditNoteAction,
    RegisterNoteAction,
    SetNoteAction,
    ToggleFlagAction,
} from "./actions";

const initialData = {
    notes: [],
    note: null,
    saveNoteError: null,
    wasNoteSaved: false,

    dispatch: () => {},
};

export const NotesContext = createContext(initialData);
let noteId = 0;

function themesReducer(state, action) {
    switch (action.type) {
        case RegisterNoteAction: {
            return {
                ...state,
                notes: [...state.notes, { ...action.value, id: noteId++ }],
            };
        }

        case EditNoteAction: {
            const newNotes = [...state.notes];
            const noteIndex = newNotes.findIndex(
                (note) => note.id == action.value.id
            );
            newNotes[noteIndex] = { ...action.value };
            return { ...state, notes: newNotes };
        }

        case DeleteNoteAction: {
            const newNotes = [...state.notes];
            const noteIndex = newNotes.findIndex(
                (note) => note.id == action.value.id
            );
            newNotes.splice(noteIndex, 1);
            return { ...state, notes: newNotes };
        }

        case ToggleFlagAction: {
            const newState = { ...state };
            newState[action.flagName] = !newState[action.flagName];
            return { ...newState };
        }

        case SetNoteAction: {
            return { ...state, note: action.value };
        }

        default:
            console.error(`${action.type} action not being handled`);
    }

    return state;
}

export default function NotesContextComponent({ children }) {
    const [state, dispatch] = useReducer(themesReducer, initialData);
    useTurnOffFlag({
        flag: state.wasNoteSaved,
        flagName: "wasNoteSaved",
        dispatch,
    });

    return (
        <NotesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NotesContext.Provider>
    );
}
