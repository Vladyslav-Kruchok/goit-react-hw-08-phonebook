import React, { useState } from 'react';
//Style
import {
    RegForm,
    RegFormLabel,
    RegFormSpan,
    RegFormButton
} from './RegisterForm.styled';

export const RegisterForm = () => {
    const [name, setNameUser] = useState('');
    const [email, setEmailUser] = useState('');
    const [password, setPasswordUser] = useState('');
    
    const user = {
        name: "name",
        email: "email",
        password: "password"
    };

    const resetFormInput = () => { 
        setNameUser('');
        setEmailUser('');
        setPasswordUser('');
    };
    const formOnSubmit = (e) => { 
        e.preventDefault();
        console.log('RegisterForm-formOnSubmit: ', { name, email, password });
        resetFormInput();
    };
    const inputOnChange = (e) => { 
        const { name, value } = e.currentTarget;
            switch (name) {
                case user.name:
                    setNameUser(value);
                    break;
                case user.email:
                    setEmailUser(value);
                    break;
                case user.password:
                    setPasswordUser(value);
                    break;
                default:
                    return;
        }
    };

    return (
        <RegForm onSubmit={formOnSubmit}>
            <RegFormLabel>
                <RegFormSpan>Name</RegFormSpan>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={inputOnChange}
                    required
                />
            </RegFormLabel>
            <RegFormLabel>
                <RegFormSpan>Email</RegFormSpan>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={inputOnChange}
                    required
                />
            </RegFormLabel>
            <RegFormLabel>
                <RegFormSpan>Password</RegFormSpan>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={inputOnChange}
                    required
                />
            </RegFormLabel>
            <RegFormButton>Register</RegFormButton>
        </RegForm>
    );
};