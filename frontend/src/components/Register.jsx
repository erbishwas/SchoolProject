// Register.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { provinces, districts, LocalBodies } from '../Data/AddressData';
import { useState } from 'react';

const Register = () => {
    const [selectedProvince, setSelectedProvince] = useState(" ");
    const [selectedDistrict, setSelectedDistrict] = useState(" ");

    const registerSchema = Yup.object().shape({
        first_name: Yup.string().required('Required'),
        // middleName: Yup.string(),
        last_name: Yup.string().required('Required'),
        phone_number: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        // profilePhoto: Yup.mixed().required('Profile photo is required'),
        province: Yup.string().required('Required'),
        district: Yup.string().required('Required'),
        local_government: Yup.string().required('Required'),
        ward: Yup.string().required('Required'),
        tole: Yup.string().required('Required'),
    });

    const handleRegister = async (values, { setSubmitting }) => {
        // console.log('Registering with values:', values);
        const formData = JSON.stringify(values);
        // console.log('Form Data:', formData);
        try {
            const response = await axios.post('/api/signup/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200 || response.status === 201) {
                alert('Registered successfully!');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg bg-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <Formik
                    initialValues={{
                        first_name: '',
                        // middleName: '',
                        last_name: '',
                        // profilePhoto: '',
                        phone_number: '',
                        email: '',
                        province: '',
                        district: '',
                        local_government: '',
                        ward: '',
                        tole: '',
                    }}
                    validationSchema={registerSchema}
                    onSubmit={handleRegister}
                >
                    {({ setFieldValue }) => (
                        <Form className="space-y-4">
                            <div>
                                <label className="block">First Name</label>
                                <Field name="first_name" className="w-full border p-2 rounded" />
                                <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                            </div>
                            {/* <div>
                                <label className="block">Middle Name</label>
                                <Field name="middleName" className="w-full border p-2 rounded" />
                                <ErrorMessage name="middleName" component="div" className="text-red-500 text-sm" />
                            </div> */}
                            <div>
                                <label className="block">Last Name</label>
                                <Field name="last_name" className="w-full border p-2 rounded" />
                                <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                            </div>
                            {/* <div>
                                <label className="block">Profile Photo</label>
                                <input
                                    name="profilePhoto"
                                    type="file"
                                    onChange={(e) => setFieldValue('profilePhoto', e.target.files[0])}
                                    className="w-full border p-2 rounded"
                                />
                                <ErrorMessage name="profilePhoto" component="div" className="text-red-500 text-sm" />
                            </div> */}
                            <div>
                                <label className="block">Phone</label>
                                <Field name="phone_number" className="w-full border p-2 rounded" />
                                <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Email</label>
                                <Field name="email" type="email" className="w-full border p-2 rounded" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Address</label>
                                <Field as="select" name="province" className="w-full border p-2 my-1 rounded"
                                    onChange={e => {
                                        setFieldValue('province', e.target.value);
                                        setSelectedProvince(e.target.value);
                                    }}>
                                    <option value="">Select a province</option>
                                    {provinces.map((province, index) => (
                                        <option key={index} value={province.Number}>{province.Nepali}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="province" component="div" className="text-red-500 text-sm" />
                                <Field as="select" name="district" className="w-full border p-2 my-1 rounded"
                                    onChange={e => {
                                        setFieldValue('district', e.target.value);
                                        setSelectedDistrict(e.target.value);
                                    }}>
                                    <option value="">Select a district</option>
                                    {districts.filter((district) =>
                                        district.Province == selectedProvince
                                    ).map((filteredData, index) => (
                                        <option key={index} value={filteredData.Name}>{filteredData.Nepali}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="district" component="div" className="text-red-500 text-sm" />
                                <Field as="select" name="local_government" className="w-full border p-2 my-1 rounded"
                                    onChange={e => {
                                        setFieldValue('local_government', e.target.value);
                                    }}>
                                    <option value="">Select a local_government</option>
                                    {LocalBodies.filter((localBody) =>
                                        localBody.District == selectedDistrict
                                    ).map((filteredData, index) => (
                                        <option key={index} value={filteredData.Nepali}>{filteredData.Nepali}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="local_government" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">Ward</label>
                                <Field name="ward" className="w-full border p-2 rounded" />
                                <ErrorMessage name="ward" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block">tole</label>
                                <Field name="tole" className="w-full border p-2 rounded" />
                                <ErrorMessage name="tole" component="div" className="text-red-500 text-sm" />
                            </div>
                            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-250 hover:cursor-pointer">Register</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
