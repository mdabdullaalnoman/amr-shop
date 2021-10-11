import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebaseInitilize";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    const auth = getAuth();

    //firebase google sign in---------------------------------------------------------------
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)      
    }

    // current sign in user store in user state ----------------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [user])

    // signOut-----------------------------------------------------------------------------
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
            setMessage('log out success full')
        })
            .catch((error) => {
                setMessage(error.message)
            });
    }


    return {
        user,
        message,
        handleGoogleSignIn,
        handleSignOut
    }
}

export default useFirebase;