import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuth from "../pages/Shared/firebase/firebase.init";


intializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .catch(() => console.log('Canceled'))
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        setIsLoading,
        signIn,
        signInWithGoogle,
        logOut
    };
};

export default useFirebase;