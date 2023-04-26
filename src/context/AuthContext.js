import { auth, db } from "../firebase.config";
import nookies from "nookies";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  sendEmailVerification,
} from "firebase/auth";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  let mounted = useRef(false);

  const createUser = async (email, password) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(newUser.user);
      return newUser;
    } catch (error) {
      console.log("user creation error", error);
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          setUser(user);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorMessage);
          // ...
        });
    });
  };

  const sendPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    mounted.current = true;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (mounted.current) {
          const token = await user.getIdToken()
          setUser(user);
          nookies.set(undefined, 'token', token, {path: '/'})
        }
      } else {
        if (mounted.current) {
          setUser(null);
          nookies.set(undefined, "token", "", { path: "/" });
        }
      }
    });
    return () => {
      mounted.current = false;
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    const handle = setInterval(async () => {
    const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logout,
        user,
        createUser,
        signIn,
        sendPasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
