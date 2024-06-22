import { useState } from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EyeIcon, EyeOffIcon } from '../../assets';
import { Button } from '../../components';

import schema from './schema';

import s from './LoginForm.module.css';

const LoginForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema)
  });

  const handleOnSubmit = (data: object) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <p className={s.loginLabel}>Log in</p>
      <p className={s.greetings}>
        Welcome back! Please enter your credentials to access your account and continue
        your babysitter search.
      </p>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <label className={s.formField}>
          <input type="email" placeholder="Email" {...register('email')} />
          {errors.email && <span className={s.errorSpan}>{errors.email.message}</span>}
        </label>
        <div className={clsx(s.formField, s.passwordFieldWrapper)}>
          <label>
            <input
              type={isPasswordHidden ? 'password' : 'text'}
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <span className={s.errorSpan}>{errors.password.message}</span>
            )}
          </label>
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
