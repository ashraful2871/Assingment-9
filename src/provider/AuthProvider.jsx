import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  const userEmail = user?.email;
  // console.log(userEmail);

  // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  //sign up
  const signUp = (email, password) => {
    // if (!passwordRegex.test(password)) {
    //   toast.error("dose match");
    // }
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update profile
  const updateUserProfile = (updatedDate) => {
    return updateProfile(auth.currentUser, updatedDate);
  };

  // forget password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // OBSERVER
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSub();
    };
  }, []);
  const authInfo = {
    signUp,
    user,
    loginUser,
    signOutUser,
    loading,
    setUser,
    updateUserProfile,
    signInGoogle,
    userEmail,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
