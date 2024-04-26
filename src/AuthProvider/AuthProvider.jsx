import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateProfileByNameAndPhotoURL = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }





    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoader(currentUser);
                setLoader(false)
            } else {
                setUser("");
                setLoader(false)
            }
        });
        return () => {
            unsubscribe();
        }

    }, [])


    // google login system 
    const provider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }


    const loggingOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    const authData = {
        user,
        setUser,
        loader,
        setLoader,
        createUser,
        updateProfileByNameAndPhotoURL,
        loginUser,
        loggingOut,
        loginWithGoogle
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;