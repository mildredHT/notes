import { View } from "react-native-web";
import { MainContainer, Notes } from "../components";
import { useContext } from "react";
import { NotesContext } from "../contexts";

export default function Home() {
    const { notes } = useContext(NotesContext);

    return (
        <MainContainer title="My notes :3">
            <Notes notes={notes} />
        </MainContainer>
    );
}
