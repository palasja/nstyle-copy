import { createContext } from 'react';
type MyFancyType = {
  isAuth: boolean;
  toggleAuth: (auth: boolean) => void;
};
export const UserContext = createContext<MyFancyType>({
  isAuth: false,
  toggleAuth: (auth) => {
    auth;
  },
});
