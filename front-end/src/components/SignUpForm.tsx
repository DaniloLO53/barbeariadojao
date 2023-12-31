import { useAuthContext } from '@/context/authContext';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginForm } from './LoginForm';

export const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const { signUpHandler, setRegisterScreen } = useAuthContext();
  const router = useRouter();
  const formIsValid = password.length > 0
    && email.length > 0
    && confirmPassword.length > 0
    && validateEmail()
    && validatePassword().isValid
    && validateConfirmPassword();

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length > 0) return emailRegex.test(email);

    return true;
  }

  function validateConfirmPassword() {
    if (confirmPassword.length === 0) return true;

    return confirmPassword === password;
  }

  function validatePassword() {
    if (password.length === 0) return (
      {
        message: <span></span>,
        isValid: true,
      }
    );
      
    const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':'\\|,.<>/?]/;
    const digitRegex = /\d/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;

    const isOver8 = password.length >= 8;
    const isLessThan16 = password.length <= 16;
    const hasSpecialChar = specialCharacterRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);

    const isValid = isOver8
      && isLessThan16
      && hasSpecialChar
      && hasDigit
      && hasLowercase
      && hasUppercase;

    return ({
      message: (
        <span className='flex flex-col'>
          {!isOver8 && <span>Must has over 8 characters</span>}
          {!isLessThan16 && <span>Must has less than 16 characters</span>}
          {!hasSpecialChar && <span>Must has a special character</span>}
          {!hasDigit && <span>Must has at least one digit</span>}
          {!hasLowercase && <span>Must at least one lowercase letter</span>}
          {!hasUppercase && <span>Must at least one uppercase letter</span>}
        </span>
      ),
      isValid
    })
  }

  return (
    <div
      className='bg-white opacity-80 pb-[36px] px-[24px] border-solid border-[1px] rounded-md
      border-slater-200 flex flex-col itens-center gap-y-[20px]'
    >
      <Image
        src='/images/logo.png'
        alt='Learnus Logo'
        className='m-[45px]'
        width={250}
        height={200}
        priority
      />
      <TextField
        className='my-[12px]'
        id='outlined-basic'
        required
        label='Email'
        variant='outlined'
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
        error={!validateEmail()}
        helperText={!validateEmail() && 'Email format is invalid'}
      />
      <TextField
        className='my-[12px]'
        id='outlined-basic'
        required
        label='Password'
        variant='outlined'
        value={password}
        onChange={({ target }) => {
          setPassword(target.value)
        }}
        error={!validatePassword().isValid}
        helperText={!validatePassword().isValid && validatePassword().message}
      />
      <TextField
        className='my-[12px]'
        id='outlined-basic'
        required
        label='Confirm password'
        variant='outlined'
        value={confirmPassword}
        onChange={({ target }) => {
          setConfirmPassword(target.value)
        }}
        error={!validateConfirmPassword()}
        helperText={!validateConfirmPassword() && 'Passwords must match'}
      />
      <button
        type='button'
        className='text-blue-500 mb-[7px] hover:font-bold'
        onClick={() => setRegisterScreen(<LoginForm />)}
      >
        Already registered? Login here!
      </button>
      <div className='flex items-center justify-center'>
        <button
          type='button'
          onClick={() => signUpHandler({ email, password, confirmPassword })}
          disabled={!formIsValid}
          className='bg-yellow-400 px-[50px] py-[20px] w-full'
        >
          Sign-up
        </button>
      </div>
    </div>
  )
}