import { ReactNode, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { toast } from 'react-toastify';

import { RegisterUserData, UserCredentials, UserData } from '../types';
import { auth } from '../fireBase';
import { toastOptionsError, toastOptionsSuccess } from '../constants';

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
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Logged in successfully', toastOptionsSuccess);
    } catch (error) {
      toast.error(`Error - email or password is wrong`, toastOptionsError);
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
      toast.success('Signed up and logged in successfully', toastOptionsSuccess);
    } catch (error) {
      toast.error(`Error - user with this email already exists`, toastOptionsError);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully', toastOptionsSuccess);
    } catch (error) {
      toast.error(`Error - something went wrong`, toastOptionsError);
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
