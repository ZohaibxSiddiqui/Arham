import React from 'react';
import InputField from './InputField';

const RegisterForm = ({ formData, errors, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <InputField
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={onChange}
            placeholder="Name"
            error={errors.name && errors.name[0]}
        />
        <InputField
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Email"
            error={errors.email && errors.email[0]}
        />
        <InputField
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={onChange}
            placeholder="Password"
            error={errors.password && errors.password[0]}
        />
        <InputField
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={formData.password_confirmation}
            onChange={onChange}
            placeholder="Confirm Password"
            error={errors.password_confirmation && errors.password_confirmation[0]}
        />
        <button type="submit">Register</button>
    </form>
);

export default RegisterForm;
