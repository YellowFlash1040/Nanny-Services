import { createContext } from 'react';

import { UserCredentials, RegisterUserData, UserData } from '../types';

interface AppContextProps {
  isLoggedIn: boolean;
  userData: UserData;
  logIn: (data: UserCredentials) => Promise<boolean>;
  logOut: () => Promise<boolean>;
  signUp: (data: RegisterUserData) => Promise<boolean>;
}

export const AppContext = createContext<AppContextProps>({
  isLoggedIn: false,
  userData: { email: '', name: '', id: '' },
  logIn: async () => false,
  logOut: async () => false,
  signUp: async () => false
});
