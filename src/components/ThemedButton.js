import { useContext } from "react";
import { ThemeContext } from "../App.js";

const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return (
        <button style={{background: theme.background, color: theme.textColor}}>
            Stylish button
        </button>
    );
}

export default ThemedButton;