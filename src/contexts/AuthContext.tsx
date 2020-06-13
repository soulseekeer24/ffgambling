import React, {useEffect, useState} from "react";


export const AuthContext = React.createContext({user: null});

type Props = {}

export const AuthProvider = (props: React.PropsWithChildren<Props>) => {
    const [currentUser, setCurrentUser] = useState(null) as any;
    const [pending, setPending] = useState(true);
    useEffect(() => {

        const jwtEncoded = localStorage.getItem("jwt-encoded");
        // const jwtEncoded = "jwt-encoded";
        if (jwtEncoded) {
            const user = {username: 'test'};
            setCurrentUser(user);
        } else {
            setCurrentUser(null);
        }

        setTimeout(() => {
            setPending(false);
        }, 1000);
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider value={{user: currentUser}}>
            {props.children}
        </AuthContext.Provider>
    );
};