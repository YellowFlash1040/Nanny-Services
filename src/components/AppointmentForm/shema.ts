import * as yup from 'yup';

const schema = yup.object({
  address: yup.string().required(),
  phone: yup.string().required(),
  age: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .typeError('The value must be a number')
    .min(0, 'x > 0 and x <= 12')
    .max(12, 'x > 0 and x <= 12')
    .required(),
  time: yup.string(),
  email: yup.string().email().required(),
  fullname: yup.string().min(3).max(48).required(),
  comment: yup.string().max(500)
});

export default schema;
