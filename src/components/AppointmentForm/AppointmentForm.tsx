import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { Button, TimePicker } from '../../components';

import schema from './shema';

import s from './AppointmentForm.module.css';

// interface AppointmentFormProps {}

interface FormFields {
  address: string;
  phone: string;
  age: number;
  time?: string | undefined;
  email: string;
  fullname: string;
  comment?: string | undefined;
}

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control
  } = useForm({
    defaultValues: { time: '10:00' },
    resolver: yupResolver(schema)
  });

  const handleFormSubmit = (data: FormFields) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className={s.twoFieldsContainer}>
        <label className={s.formField}>
          <input type="text" placeholder="Address" {...register('address')} />
          {errors.address && (
            <span className={s.errorSpan}>{errors.address.message}</span>
          )}
        </label>
        <label className={s.formField}>
          <input type="tel" placeholder="+380" {...register('phone')} />
          {errors.phone && <span className={s.errorSpan}>{errors.phone.message}</span>}
        </label>
      </div>
      <div className={s.twoFieldsContainer}>
        <label className={s.formField}>
          <input type="text" placeholder="Child's age" {...register('age')} />
          {errors.age && <span className={s.errorSpan}>{errors.age.message}</span>}
        </label>
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <TimePicker
              value={field.value!}
              onChange={field.onChange}
              dropDownClassName={s.timePicker}
            />
          )}
        />
      </div>
      <label className={s.formField}>
        <input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <span className={s.errorSpan}>{errors.email.message}</span>}
      </label>
      <label className={s.formField}>
        <input
          type="text"
          placeholder="Father's or mother's name"
          {...register('fullname')}
        />
        {errors.fullname && (
          <span className={s.errorSpan}>{errors.fullname.message}</span>
        )}
      </label>
      <textarea placeholder="Comment" {...register('comment')} />
      <Button className={s.sendButton} type="submit" onClick={() => {}}>
        Send
      </Button>
    </form>
  );
};

export default AppointmentForm;
