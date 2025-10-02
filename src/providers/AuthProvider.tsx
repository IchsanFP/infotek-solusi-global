'use client'
import { CONSTANTSTRING } from "@/utils/constants";
import { clearCookie, getCookie } from "@/lib/cookie";
import React, {createContext, useEffect, useState, ReactNode} from 'react';

interface AuthContextType {
  isAuth: boolean;
  resetContext: () => void;
  getStatusAuth: () => boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  resetContext: () => {},
  getStatusAuth: () => false
});

interface AuthContextProviderProps {
  children: ReactNode;
};

const AuthProvider: React.FC<AuthContextProviderProps> = ({
  children
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  /**
   * function for check token with return is boolean
   * @returns
   */
  const getStatusAuth = ():boolean => {
    return (
      typeof window !== 'undefined' && getCookie(CONSTANTSTRING.ACCESSTOKEN) !== null
    );
  }


  const resetContext = (): void => {
    clearCookie([
      CONSTANTSTRING.ACCESSTOKEN,
      CONSTANTSTRING.REFRESHTOKEN
    ]);
    setIsAuth(false);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuth(getStatusAuth())
    }
  }, []);


  return <AuthContext.Provider value={{ isAuth, resetContext, getStatusAuth }}>{children}</AuthContext.Provider>
}

export default AuthProvider;