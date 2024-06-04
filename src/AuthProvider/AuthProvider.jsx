import React, { createContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  console.log(user)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth).then(() => setUser(null))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser)
      }else{
        setLoading(false)
      }
    });
    return () => {
      return unsubscribe();
    }
  },[])
  const authInfo = {googleLogin, user, createUser, signIn, logOut, loading}
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

