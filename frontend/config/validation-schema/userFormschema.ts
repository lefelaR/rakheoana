import * as Yup from 'yup';

const UserFormSchema = Yup.object().shape({
    firstName: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    username: Yup.string().required('username is required'),
});

export default UserFormSchema;
