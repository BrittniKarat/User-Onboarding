import * as yup from 'yup';

const schema = yup.object().shape({

    name: yup
        .string()
        .min(3, 'Name must have a minimum of 3 characters')
        .max(30, 'Name must have a maximum of 30 characters')
        .trim()
        .required('Name is required for submission'),
    phoneNumber: yup
        .number('Phone number must be a 10 digit number')
        .min(1000000000)
        .max(9999999999),
    email: yup
        .string()
        .email('Valid email is required for submission')
        .trim()
        .required('Valid email is required for submission'),
    password: yup
        .string()
        .min(8, 'Password must have a minimum of 8 characters')
        .max(20, 'Password must have a maximum of 20 characters')
        .trim()
        .required('Name is required for submission'),
    tos: yup.boolean(),

});

export default schema;