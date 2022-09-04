import React, { useState } from 'react';
//Style
import {
    LogForm,
    LogFormLabel,
    LogFormSpan,
    LogFormButton
} from './LoginForm.styled';

export const LoginForm = () => {
    const [email, setEmailUser] = useState('');
    const [password, setPasswordUser] = useState('');
    
    const user = {
        email: "email",
        password: "password"
    };

    const resetFormInput = () => { 
        setEmailUser('');
        setPasswordUser('');
    };
    const formOnSubmit = (e) => { 
        e.preventDefault();
        console.log('LoginForm-formOnSubmit: ', { email, password });
        resetFormInput();
    };
    const inputOnChange = (e) => { 
        const { name, value } = e.currentTarget;
            switch (name) {
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
        <LogForm onSubmit={formOnSubmit}>
            <LogFormLabel>
                <LogFormSpan>Email</LogFormSpan>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={inputOnChange}
                    required
                />
            </LogFormLabel>
            <LogFormLabel>
                <LogFormSpan>Password</LogFormSpan>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={inputOnChange}
                    required
                />
            </LogFormLabel>
            <LogFormButton>Login</LogFormButton>
        </LogForm>
    );
};