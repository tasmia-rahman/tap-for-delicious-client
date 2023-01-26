import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

    const [toggleTheme, setToggleTheme] = useState(true);

    const authInfo = { toggleTheme, setToggleTheme }

    return (
        <ThemeContext.Provider value={authInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
