import { useAuthContext } from '@/context/authContext';
import { TextField } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { SignUpForm } from './SignUpForm';

export const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const formIsValid = password.length > 0 && email.length > 0;
  const { setRegisterScreen, signInHandler } = useAuthContext();

  return (
    <div
      className="bg-white/80 pb-[36px] px-[24px] border-solid border-[1px] rounded-md
      border-slater-200 flex flex-col itens-center gap-y-[20px]"
    >
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="m-[45px]"
        width={250}
        height={250}
        priority
      />
      <TextField
        className="my-[12px]"
        id="outlined-basic"
        required
        label="Email"
        variant="outlined"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextField
        className="my-[12px]"
        id="outlined-basic"
        required
        label="Password"
        variant="outlined"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button
        type="button"
        className="text-blue-500 mb-[7px] hover:font-bold"
        onClick={() => setRegisterScreen(<SignUpForm />)}
      >
        Not registered yet? Sign-up here!
      </button>
      <div className='flex items-center justify-center'>
        <button
          type='button'
          onClick={() => signInHandler({ email, password })}
          disabled={!formIsValid}
          className='bg-yellow-400 px-[50px] py-[20px] w-full'
        >
          Sign-in
        </button>
      </div>
    </div>
  );
};
