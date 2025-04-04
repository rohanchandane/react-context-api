import AppContext from "./AppContext";
import React, { useState } from "react";

interface AppProviderProps {
    children: React.ReactNode;
}
function AppProvider(props: AppProviderProps) {
    const { children }   = props;

    const [title, setTitle] = useState<string>("Rohan");
    const updateTitle = (newTitle: string) => {
        setTitle(newTitle);
    }

    return (
        <AppContext.Provider value={{ title, updateTitle }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;