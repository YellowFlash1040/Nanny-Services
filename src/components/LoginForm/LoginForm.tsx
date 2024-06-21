import { useState } from 'react';
import clsx from 'clsx';

import { EyeIcon, EyeOffIcon } from '../../assets';
import { Button } from '../../components';

import s from './LoginForm.module.css';

const LoginForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <>
      <p className={s.loginLabel}>Log in</p>
      <p className={s.greetings}>
        Welcome back! Please enter your credentials to access your account and continue
        your babysitter search.
      </p>
      <form>
        <input className={s.formField} type="email" placeholder="Email" />
        <div className={clsx(s.formField, s.passwordFieldWrapper)}>
          <input type={isPasswordHidden ? 'password' : 'text'} placeholder="Password" />
          <button
            className={s.eyeButton}
            type="button"
            onClick={() => {
              setIsPasswordHidden(!isPasswordHidden);
            }}
          >
            {(isPasswordHidden && <EyeOffIcon width={20} height={20} />) || (
              <EyeIcon width={20} height={20} />
            )}
          </button>
        </div>
        <Button className={s.submitButton} type="submit">
          Log in
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
