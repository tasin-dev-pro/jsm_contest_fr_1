import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [responseImg, setResponseImg] = useState(null);
    const [usernameGlb, setUsernameGlb] = useState("");
    const [bioGlb, setBioGlb] = useState("");

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, responseImg, setResponseImg, usernameGlb, setUsernameGlb, bioGlb, setBioGlb }}>
            {children}
        </UserContext.Provider>
    );
};
