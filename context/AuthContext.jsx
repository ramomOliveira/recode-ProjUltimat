import route from 'next/router';
import User from '../model/User';
import { createContext, useState } from 'react';

import firebase from '../firebase/config';

const AuthContext = createContext({});


async function userNormalized(userFirebase = firebase.User) {
  const token = await userFirebase.getIdToken()
  return (
    userFirebase.uid,
    userFirebase.displayName,
    userFirebase.email,
    token,
    userFirebase.providerData[0].providerId,
    userFirebase.photoURL
  );
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    if (resp.user?.email) {
      const usuario = await userNormalized(resp.user)
      setUser(usuario)
      route.push('/usuario')
    }

  }

  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle,

    }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext