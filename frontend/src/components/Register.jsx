// Register.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { SelectDistrict } from 'nepal-address-pickers';
// import 'nepal-address-pickers/dist/index.css';

const Register = () => {
    const registerSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        middleName: Yup.string(),
        lastName: Yup.string().required('Required'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        profilePhoto: Yup.mixed().required('Profile photo is required'),
        province: Yup.string().required('Required'),
        district: Yup.string().required('Required'),
        municipality: Yup.string().required('Required'),
        ward: Yup.string().required('Required'),
        area: Yup.string().required('Required'),
    });

    const handleRegister = async (values, setSubmitting) => {
        const formData = new FormData();
        for (let key in values) {
            formData.append(key, values[key]);
        }

        try {
            console.log('Form Data:', formData);
            setSubmitting(false);
            // const response = await axios.post('/api/register/', formData);
            // if (response.status === 200 || response.status === 201) {
            //     alert('Registered successfully!');
            // } else {
            //     alert('Registration failed');
            // }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg bg-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <Formik
                    initialValues={{
                        firstName: '',
                        middleName: '',
                        lastName: '',
                        profilePhoto: '',
                        phone: '',
                        email: '',
                        province: '',
                        district: '',
                        municipality: '',
                        ward: '',
                        area: '',
                    }}
                    validationSchema={registerSchema}
                    onSubmit={handleRegister}
                >
                    {({ setFieldValue, values }) => (
                        <Form className="space-y-4">
                            <div>
                                <label className="block">First Name</label>
                                <Field name="firstName" className="w-full border p-2 rounded" />
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Middle Name</label>
                                <Field name="middleName" className="w-full border p-2 rounded" />
                                <ErrorMessage name="middleName" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Last Name</label>
                                <Field name="lastName" className="w-full border p-2 rounded" />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Profile Photo</label>
                                <input
                                    name="profilePhoto"
                                    type="file"
                                    onChange={(e) => setFieldValue('profilePhoto', e.target.files[0])}
                                    className="w-full border p-2 rounded"
                                />
                                <ErrorMessage name="profilePhoto" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Phone</label>
                                <Field name="phone" className="w-full border p-2 rounded" />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Email</label>
                                <Field name="email" type="email" className="w-full border p-2 rounded" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Address</label>
                                {/* <AddressPicker
                                    province={values.province}
                                    district={values.district}
                                    localLevel={values.municipality}
                                    onProvinceChange={(province) => {
                                        setFieldValue('province', province);
                                        setFieldValue('district', '');
                                        setFieldValue('municipality', '');
                                    }}
                                    onDistrictChange={(district) => {
                                        setFieldValue('district', district);
                                        setFieldValue('municipality', '');
                                    }}
                                    onLocalLevelChange={(municipality) => setFieldValue('municipality', municipality)}
                                    className="space-y-2"
                                /> */}
                                <SelectDistrict
                                    lang="np"
                                    placeholder="Select a district"
                                    onChange={district => { setFieldValue('district', district) }}
                                    value={values.district}
                                    province="Gandaki"
                                />
                                <ErrorMessage name="province" component="div" className="text-red-500 text-sm" />
                                <ErrorMessage name="district" component="div" className="text-red-500 text-sm" />
                                <ErrorMessage name="municipality" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Ward</label>
                                <Field name="ward" className="w-full border p-2 rounded" />
                                <ErrorMessage name="ward" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Area</label>
                                <Field name="area" className="w-full border p-2 rounded" />
                                <ErrorMessage name="area" component="div" className="text-red-500 text-sm" />
                            </div>
                            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Register</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
