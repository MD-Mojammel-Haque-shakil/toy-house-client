import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
 
 export const AuthContext = createContext();
 const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        return signOut(auth);
      }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          console.log('auth state changed', currentUser);
          setUser(currentUser);
        })
  
        return ()=>{
          unSubscribe();
        }
      }, [])

    const authInfo = {
       createUser,
       signIn,
       user,
       logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;