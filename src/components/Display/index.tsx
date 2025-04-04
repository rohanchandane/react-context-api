import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Display() {
    const appContext = useContext(AppContext);
    return (
        <span>{appContext?.title}</span>
    );
}

export default Display;