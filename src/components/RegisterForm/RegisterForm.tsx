import { useState } from 'react';
import clsx from 'clsx';

import { EyeIcon, EyeOffIcon } from '../../assets';
import { Button } from '..';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <>
      <p className={s.loginLabel}>Registration</p>
      <p className={s.greetings}>
        Thank you for your interest in our platform! In order to register, we need some
        information. Please provide us with the following information.
      </p>
      <form>
        <input className={s.formField} type="text" placeholder="Name" />
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
          Sign up
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
