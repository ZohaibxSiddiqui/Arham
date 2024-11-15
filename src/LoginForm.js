import React from 'react';
import InputField from './InputField';

const LoginForm = ({ formData, errors, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
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
        <button type="submit">Login</button>
    </form>
);

export default LoginForm;
