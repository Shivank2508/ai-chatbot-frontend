import { Children, createContext, useActionState, useContext, useEffect, useState, type ReactNode } from 'react'
import { loginUser } from '../helper/api';
type User = {
    email: string;
    password: string;
}
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>
}

const AuthContext = createContext<UserAuth | null>(null)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoggedIn, setIsloggedIn] = useState(false)
    useEffect(() => {
        //if user have cookies then skip login 
    }, [])

    const login = async (email: string, password: string) => {
        const data = await loginUser(email, password)
        if (data) {
            setUser(data)
            setIsloggedIn(true)
        }
        console.log(data)
    }
    const signup = async (name: string, email: string, password: string) => { }
    const logout = async () => { }
    const value = {
        user,
        isLoggedIn,
        login,
        signup,
        logout
    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    )
}

export const UserContext = () => useContext(AuthContext)