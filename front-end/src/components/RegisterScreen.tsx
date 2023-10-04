import { AnyAaaaRecord } from 'dns';
import React, { useEffect } from 'react';

interface RegisterScreenProps {
  children: React.ReactNode;
  setRegisterScreenOpened: any;
}

export default function RegisterScreen({
  children,
  setRegisterScreenOpened
}: RegisterScreenProps) {
  function clickScreenHandler(event: any) {
    const { target } = event;
    if (target.id === 'register-screen') {
      setRegisterScreenOpened(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    window.addEventListener('click', clickScreenHandler, { signal });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div
      className="absolute min-h-screen min-w-full bg-black/70 flex items-center
      justify-center"
      id='register-screen'
    >
      {children}
    </div>
  );
}
