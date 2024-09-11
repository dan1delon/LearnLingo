import { useState } from 'react';
import css from './BookingForm.module.css';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const BookingForm = () => {
  const FormSchema = Yup.object({
    reason: Yup.string().required('Please select a reason'),
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email().required('Please enter a valid email'),
    phone: Yup.string().required('Please enter your phone number'),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
    mode: 'onSubmit',
    defaultValues: {
      reason: '',
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };
  const [selectedReason, setSelectedReason] = useState('Career and business');
  const handleRadioChange = e => {
    setSelectedReason(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.reasonWrapper}>
        <h4 className={css.title}>
          What is your main reason for learning English?
        </h4>
        <div className={css.radioWrapper}>
          <label
            className={clsx(css.labelRadio, {
              [css.active]: selectedReason === 'Career and business',
            })}
          >
            <input
              type="radio"
              value="Career and business"
              {...register('reason')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            Career and business
          </label>
          <label
            className={clsx(css.labelRadio, {
              [css.active]: selectedReason === 'Lesson for kids',
            })}
          >
            <input
              type="radio"
              value="Lesson for kids"
              {...register('reason')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            Lesson for kids
          </label>
          <label
            className={clsx(css.labelRadio, {
              [css.active]: selectedReason === 'Living abroad',
            })}
          >
            <input
              type="radio"
              value="Living abroad"
              {...register('reason')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            Living abroad
          </label>
          <label
            className={clsx(css.labelRadio, {
              [css.active]: selectedReason === 'Exams and coursework',
            })}
          >
            <input
              type="radio"
              value="Exams and coursework"
              {...register('reason')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            Exams and coursework
          </label>
          <label
            className={clsx(css.labelRadio, {
              [css.active]: selectedReason === 'Culture, travel or hobby',
            })}
          >
            <input
              type="radio"
              value="Culture, travel or hobby"
              {...register('reason')}
              className={clsx(css.radioHidden)}
              onChange={handleRadioChange}
            />
            Culture, travel or hobby
          </label>
        </div>
        <div className={css.formWrapper}>
          <label className={css.labelWrapper}>
            <input
              type="text"
              {...register('name')}
              placeholder="Full Name"
              className={clsx(css.input, { [css.inputError]: errors.name })}
            />
          </label>
          <label className={css.labelWrapper}>
            <input
              type="email"
              {...register('email')}
              placeholder="Email"
              className={clsx(css.input, { [css.inputError]: errors.email })}
            />
          </label>
          <label className={css.labelWrapper}>
            <input
              type="number"
              {...register('phone')}
              placeholder="Phone number"
              className={clsx(css.input, {
                [css.inputError]: errors.phone,
              })}
            />
          </label>
        </div>
      </div>
      <button type="submit" className={css.btn}>
        Book
      </button>
    </form>
  );
};

export default BookingForm;
