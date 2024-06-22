import * as yup from 'yup';

const schema = yup.object({
  fullname: yup.string().required().min(3).max(25),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?:;"'{}|<>_+-=/\\`~]/,
      'Password must contain at least one special character'
    )
});

export default schema;
