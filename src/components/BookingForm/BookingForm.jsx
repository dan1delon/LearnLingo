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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.reasonWrapper}>
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
            <label key={reason} className={css.labelRadio}>
              <input
                type="radio"
                value={reason}
                {...register('reason')}
                className={css.radioHidden}
              />
              {reason}
            </label>
          ))}
          <p className={css.errorMessage}>{errors.reason?.message}</p>
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
              type="number"
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
