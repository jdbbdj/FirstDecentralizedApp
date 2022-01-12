import * as Yup from 'yup';

const cryptoValidator = Yup.object().shape({
    addressTo: Yup.string().required('Field is required'),
    amount: Yup.number()
    .nullable()
    .default(null)
    .positive()
    .integer()
    .required('Field is required'),
    keyword: Yup.string().required('Field is required'),
    message: Yup.string().required('Field is required')
})

export default cryptoValidator;