import React, {useEffect, useState} from "react";
import app from "../firebase/auth/firebaseAuth"

export const AuthContext = React.createContext({user: null});

type Props = {}

export const AuthProvider = (props: React.PropsWithChildren<Props>) => {

    const [currentUser, setCurrentUser] = useState(null) as any;
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged(function (user) {
            setCurrentUser(user);
            setPending(false);
        });
    }, [setCurrentUser, setPending]);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider value={{user: currentUser}}>
            {props.children}
        </AuthContext.Provider>
    );
};