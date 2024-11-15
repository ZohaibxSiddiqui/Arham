import React from 'react';

const InputField = ({ id, name, type, value, onChange, placeholder, error }) => (
    <div>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <p>{error}</p>}
    </div>
);

export default InputField;
