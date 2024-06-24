import { createContext } from 'react';

import { UserCredentials, RegisterUserData, UserData } from '../types';

export type stringOrNull = string | null;

interface AppContextProps {
  isLoggedIn: boolean;
  userData: UserData;
  logIn: (data: UserCredentials) => void;
  logOut: () => void;
  signUp: (data: RegisterUserData) => void;
}

export const AppContext = createContext<AppContextProps>({
  isLoggedIn: false,
  userData: { email: '', name: '', id: '' },
  logIn: () => {},
  logOut: () => {},
  signUp: () => {}
});
