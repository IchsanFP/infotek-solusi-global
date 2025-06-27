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
  /**
   * function for check token with return is boolean
   * @returns
   */
  const getStatusAuth = ():boolean => {
    setContextAuth((prevState) => ({
      ...prevState,
      isAuth: typeof window !== 'undefined' && getCookie(CONSTANTSTRING.ACCESSTOKEN) !== null
    }));

    return (
      typeof window !== 'undefined' && getCookie(CONSTANTSTRING.ACCESSTOKEN) !== null
    );
  }


  const resetContext = (): void => {
    clearCookie([
      CONSTANTSTRING.ACCESSTOKEN,
      CONSTANTSTRING.REFRESHTOKEN
    ]);
    setContextAuth((prevState) => ({
      ...prevState,
      isAuth: false
    }))
  }

  const [contextAuth, setContextAuth] = useState<AuthContextType>({
    isAuth: false,
    resetContext,
    getStatusAuth,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getStatusAuth();
      resetContext();
    }
  }, []);


  return <AuthContext.Provider value={contextAuth}>{children}</AuthContext.Provider>
}

export default AuthProvider;