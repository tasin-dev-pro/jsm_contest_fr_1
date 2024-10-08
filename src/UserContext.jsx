import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [responseImg, setResponseImg] = useState(null);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, responseImg, setResponseImg }}>
            {children}
        </UserContext.Provider>
    );
};
