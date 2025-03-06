"use client"
import { createContext, useContext, useState } from "react";
import { ReactNode  } from "react";
import { UsersState } from "../MainPage";

type authContextType = {
    isUser: boolean;
    userProfile: object;
    login: (user: UsersState) => void;
    logout: () => void;
};


type Props = {
    children: ReactNode;
};

const authContextDefaultValues: authContextType = {
    isUser: false,
    userProfile: {},
    login: () => {},
    logout: () => {},
};


const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
    const [isUser, setIsUser] = useState<boolean>(false);
    const [userProfile, setUserProfile] = useState<object>({})

    const login = (user: UsersState) => {
        setIsUser(true);
        setUserProfile(user)
        console.log(userProfile);
        
    };

    const logout = () => {
        setIsUser(false);
        setUserProfile({})
    };

    const value = {
        isUser,
        userProfile,
        login,
        logout,
    };
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

