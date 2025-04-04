import { createContext } from "react";

export interface AppContextType {
    title: string;
    updateTitle: (date: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;