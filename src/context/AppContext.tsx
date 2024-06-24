import { ReactNode, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';

import { RegisterUserData, UserCredentials, UserData } from '../types';
import { auth } from '../fireBase';

import { AppContext } from './contextConfig';

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData>({ email: '', name: '', id: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          email: user.email || '',
          name: user.displayName || '',
          id: user.uid
        });
        setIsLoggedIn(true);
      } else {
        setUserData({ email: '', name: '', id: '' });
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const logIn = async (data: UserCredentials) => {
    try {
      /* const result =  */ await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // setUserData({
      //   name: result.user.displayName || '',
      //   email: data.email,
      //   id: result.user.uid
      // });
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  const signUp = async (data: RegisterUserData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      updateProfile(result.user, { displayName: data.fullname });
      setIsLoggedIn(true);
      setUserData({ name: data.fullname, email: data.email, id: result.user.uid });
    } catch (error) {
      console.error('Error signing up: ', error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      // setUserData({ name: '', email: '', id: '' });
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        userData,
        logIn,
        logOut,
        signUp
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
