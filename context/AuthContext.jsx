import route from 'next/router';
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
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

function toManageCookie(logado) {
  if (logado) {
    Cookies.set('admin-template-cod3r-auth', "logado", {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-cod3r-auth')
  }
}

export function AuthProvider({ children }) {
  const [carregando, setCarregando] = useState(true)
  const [user, setUser] = useState(null)

  async function configureSession(userFirebase) {
    if (userFirebase?.email) {
      const user = await userNormalized(userFirebase)
      setUser(user)
      toManageCookie(true)
      setCarregando(false)
      return user.email
    } else {
      setUser(null)
      toManageCookie(false)
      setCarregando(false)
      return false
    }
  }

  async function login(email, senha) {
    try {
      setCarregando(true)
      const resp = await firebase.auth()
        .signInWithEmailAndPassword(email, senha)

      await configureSession(resp.user)
      route.push('/usuario')
    } finally {
      setCarregando(false)
    }
  }
  async function cadastrar(email, senha) {
    try {
      setCarregando(true)
      const resp = await firebase.auth()
        .createUserWithEmailAndPassword(email, senha)

      await configureSession(resp.user)
      route.push('/')
    } finally {
      setCarregando(false)
    }
  }


  async function loginGoogle() {
    try {
      setCarregando(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )

      await configureSession(resp.user)
      route.push('/usuario')
    } finally {
      setCarregando(false)
    }
  }

  async function logout() {
    try {
      setCarregando(true)
      await firebase.auth().signOut()
      await configureSession(null)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancelar = firebase.auth().onIdTokenChanged(configureSession)
      return () => cancelar()
    } else {
      setCarregando(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loginGoogle,
      carregando,
      login,
      cadastrar,
      logout

    }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext