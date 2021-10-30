import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuth from "../pages/Shared/firebase/firebase.init";


intializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .catch(() => console.log('Canceled'));
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        signIn,
        signInWithGoogle,
        logOut
    };
};

export default useFirebase;