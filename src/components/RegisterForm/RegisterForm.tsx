import { useState } from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { EyeIcon, EyeOffIcon } from '../../assets';
import { Button } from '../../components';

import schema from './schema';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
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
      <p className={s.loginLabel}>Registration</p>
      <p className={s.greetings}>
        Thank you for your interest in our platform! In order to register, we need some
        information. Please provide us with the following information.
      </p>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <label className={s.formField}>
          <input type="text" placeholder="Name" {...register('fullname')} />
          {errors.fullname && (
            <span className={s.errorSpan}>{errors.fullname.message}</span>
          )}
        </label>
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
          Sign up
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
