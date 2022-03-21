import route from 'next/router';
import { createContext, useEffect, useState } from 'react';
import firebase from '../firebase/config';
import Cookies from 'js-cookie';

const AuthContext = createContext({});


async function userNormalized(userFirebase = firebase.User) {
  const token = await userFirebase.getIdToken()
  const {
    uid, displayName, email, providerData: [{ providerId }], photoURL
  } = userFirebase
  Cookies.set("userId", uid, {
    expires: 7
  })
  return {
    uid,
    displayName,
    email,
    token,
    providerId,
    photoURL
  };
};

function toManageCookie(logado) {
  if (logado) {
    Cookies.set('admin-template-cod3r-auth', "logado", {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-cod3r-auth')
    Cookies.remove('userId')
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
      route.push('/usuario')
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