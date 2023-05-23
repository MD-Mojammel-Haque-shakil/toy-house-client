import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
 
 export const AuthContext = createContext();
 const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState (true)

    const createUser =(email, password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn =(email, password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        return signOut(auth);
      }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
          console.log('auth state changed', currentUser);
          setUser(currentUser);
          setLoading(false)
        })
  
        return ()=>{
          unSubscribe();
        }
      }, [])

    const authInfo = {
       createUser,
       signIn,
       user,
       logOut,
       loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;