import toast from 'react-hot-toast';
import css from './BookingForm.module.css';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
import { useModal } from '../../context';

const BookingForm = () => {
  const [selectedReason, setSelectedReason] = useState('');
  const { closeModal } = useModal();

  const notify = () =>
    toast.success('Your booking was successful! We will contact you soon!', {
      style: {
        border: '1px solid #38cd3e',
        color: '#121417',
        textAlign: 'center',
        position: 'top-right',
      },
      iconTheme: {
        primary: '#38cd3e',
        secondary: '#FFFAEE',
      },
    });

  const FormSchema = Yup.object({
    reason: Yup.string().required('Please select a reason'),
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email().required('Please enter a valid email'),
    phone: Yup.number().required('Please enter your phone number'),
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
      reason: '',
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data, e) => {
    console.log(data);
    setSelectedReason('');
    reset();
    closeModal(e);
    notify();
  };

  const handleRadioChange = event => {
    setSelectedReason(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.wrapper}>
        <h4 className={css.title}>
          What is your main reason for learning English?
        </h4>
        <div className={css.radioWrapper}>
          {[
            'Career and business',
            'Lesson for kids',
            'Living abroad',
            'Exams and coursework',
            'Culture, travel or hobby',
          ].map(reason => (
            <label
              key={reason}
              className={clsx(css.labelRadio, css.labelRadioAlcove, {
                [css.active]: selectedReason === reason,
              })}
            >
              <input
                type="radio"
                value={reason}
                {...register('reason')}
                className={css.radioHidden}
                onChange={handleRadioChange}
              />
              {reason}
            </label>
          ))}
          {!selectedReason && (
            <p className={css.errorMessage}>{errors.reason?.message}</p>
          )}
        </div>

        <div className={css.formWrapper}>
          <label className={css.labelWrapper}>
            <input
              type="text"
              {...register('name')}
              placeholder="Full Name"
              className={clsx(css.input, { [css.inputError]: errors.name })}
            />
            <p className={css.errorMessage}>{errors.name?.message}</p>
          </label>
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
              type="tel"
              {...register('phone')}
              placeholder="Phone number"
              className={clsx(css.input, {
                [css.inputError]: errors.phone,
              })}
            />
            <p className={css.errorMessage}>{errors.phone?.message}</p>
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
