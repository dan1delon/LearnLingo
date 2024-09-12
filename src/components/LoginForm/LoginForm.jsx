import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './LoginForm.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import Icon from '../../shared/Icon/Icon';
import useAuthActions from '../../firebaseHelpers/index.js';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthActions();

  const FormSchema = Yup.object({
    email: Yup.string().email().required('Please enter a valid email'),
    password: Yup.string().required('Please enter your password'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    login(data, e);
    reset();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <label className={css.labelWrapper}>
        <input
          type="email"
          {...register('email')}
          placeholder="Email"
          className={clsx(css.input, { [css.inputError]: errors.email })}
        />
        <p className={css.errorMessage}>{errors.email?.message}</p>
      </label>
      <label className={css.labelWrapper}>
        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password')}
          placeholder="Password"
          autoComplete="on"
          className={clsx(css.input, { [css.inputError]: errors.password })}
        />
        <button
          className={css.showPasswordBtn}
          type="button"
          onClick={handleClickShowPassword}
        >
          {showPassword ? (
            <Icon className={css.icon} iconId="icon-eye-off" />
          ) : (
            <Icon className={css.icon} iconId="icon-eye" />
          )}
        </button>
        <p className={css.errorMessage}>{errors.password?.message}</p>
      </label>
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
