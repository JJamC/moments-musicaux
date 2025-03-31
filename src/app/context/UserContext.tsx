"use client"
import { createContext, useContext, useState } from "react";
import { ReactNode  } from "react";
import { UsersState } from "../MainPage";

type userProfile = {
        id: number,
        createdAt: string,
        username: string, 
        email: string,
        avatar_url: string
    }


type authContextType = {
    isUser: boolean;
    userProfile: userProfile
    login: (user: UsersState) => void;
    logout: () => void;
};


type Props = {
    children: ReactNode;
};

const authContextDefaultValues: authContextType = {
    isUser: false,
    userProfile: {
        id: 0,
        createdAt: "not known",
        username: "not known", 
        email: "not known",
        avatar_url: "not known"
    },
    login: () => {},
    logout: () => {},
};


const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
    const [isUser, setIsUser] = useState<boolean>(false);
    const [userProfile, setUserProfile] = useState<userProfile>({id: 0,
        createdAt: "not known",
        username: "not known", 
        email: "not known",
        avatar_url: "not known"})

    const login = (user: UsersState) => {
        setIsUser(true);
        setUserProfile(user)        
    };
    

    const logout = () => {
        setIsUser(false);
        setUserProfile({id: 0,
            createdAt: "not known",
            username: "not known", 
            email: "not known",
            avatar_url: "not known"})
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

