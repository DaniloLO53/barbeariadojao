'use client';

import {
  createContext,
  ReactElement,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SignInData, SignUpData } from '@/interfaces/user/UserData';
import { LoginForm } from '@/components/LoginForm';

export interface signOutHandlerArgs {
  setCourses: (value: any) => Promise<void>;
  setUserData: (value: any) => Promise<void>;
}
interface AuthContext {
  signUpHandler: (signUpData: SignUpData) => Promise<void>;
  signInHandler: (signInData: SignInData) => Promise<void>;
  signOutHandler: (setStates: signOutHandlerArgs) => Promise<void>;
  registerScreen: React.ReactNode;
  setRegisterScreen: Dispatch<SetStateAction<ReactNode>>;
  registerScreenOpened: boolean;
  setRegisterScreenOpened: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContext | null>(null);

export function useAuthContext(): AuthContext {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode}): ReactElement {
  const [registerScreen, setRegisterScreen] = useState<React.ReactNode>(
    <LoginForm />
  );
  const [registerScreenOpened, setRegisterScreenOpened] = useState<boolean>(false);

  const router = useRouter();

  async function signUpHandler(signUpData: SignUpData) {
    const PATH = '/sign-up';
    const url = (process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string) + PATH;

    await axios({ url, method: 'post', data: signUpData });
    setRegisterScreenOpened(false);
    router.replace('/');
  }

  async function signInHandler(signInData: SignInData) {
    const PATH = '/auth/sign-in';
    const url = (process.env.NEXT_PUBLIC_SERVER_ENDPOINT as string) + PATH;

    const { data } = await axios({
      url,
      method: 'post',
      data: signInData,
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', JSON.stringify(data.access_token));
      setRegisterScreenOpened(false);
      router.replace('/');
    }
  }

  async function signOutHandler() {
    if (typeof window !== 'undefined' && localStorage.getItem('access_token')) {
      localStorage.removeItem('access_token');
    }
    
    // router.replace('/sign-in');
  }

  return (
    <AuthContext.Provider
      value={{
        signUpHandler,
        signInHandler,
        signOutHandler,
        registerScreen,
        setRegisterScreen,
        setRegisterScreenOpened,
        registerScreenOpened
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}