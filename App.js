import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ThemeContextComponent, ThemeContext } from "./contexts";
import { Home } from "./screens";
import NotesContextComponent, { NotesContext } from "./contexts/notes";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NotesContextComponent>
            <ThemeContextComponent>
                <ThemeContext.Consumer>
                    {({ mainBackground }) => (
                        <NavigationContainer
                            theme={{
                                ...DefaultTheme,
                                colors: {
                                    ...DefaultTheme.colors,
                                    background: mainBackground,
                                },
                            }}
                        >
                            <Stack.Navigator
                                screenOptions={{ headerShown: false }}
                            >
                                <Stack.Screen name="home" component={Home} />
                            </Stack.Navigator>
                        </NavigationContainer>
                    )}
                </ThemeContext.Consumer>
            </ThemeContextComponent>
        </NotesContextComponent>
    );
}
