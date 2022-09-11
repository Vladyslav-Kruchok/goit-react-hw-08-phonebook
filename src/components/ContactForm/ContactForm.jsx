import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { contactsOperations } from "../../redux/contacts";
import { authSelectors } from 'redux/auth';
import * as contactsSelectors from 'redux/contacts/contactsSelector';

export const ContactForm = () => { 
    const [name, setNameContact] = useState("");
    const [number, setNumberContact] = useState("");
    
    const dispatch = useDispatch();
    const auth = useSelector(authSelectors.auth);
    const contacts = useSelector(contactsSelectors.getContacts);

    const formOnSubmit = (e) => {
        e.preventDefault();
        const token = auth.token;
        const result = contacts.find(contact => {
            return contact.name === name;
        });

        if (!result) {
            dispatch(contactsOperations.axiosAddContact({ name, number, token })).then(() => {
            dispatch(contactsOperations.axiosGetContacts(token));
            });
        } else {
            alert(`${name} is already in a contact`);
            return;
        }
        resetFormInput();
    };
    const contact = {
        name: "name",
        number: "number"
    };
    const inputOnChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case contact.name:
                setNameContact(value);
                break;
            case contact.number:
                setNumberContact(value);
                break;
            default:
                return;
        }
    };
    const resetFormInput = () => { 
        setNameContact("");
        setNumberContact("");
    };

    return (
        <>
            <form className={styles.form} onSubmit={formOnSubmit}>
                <label className={styles.label}>
                    <span className={styles.span}>Name</span>
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={inputOnChange}
                        required
                    />
                </label>
                <label className={styles.label}>
                    <span className={styles.span}>Number</span>
                    <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={inputOnChange}
                    />
                </label>
                <button className={styles.button} type="submit">Add contacts</button>
            </form>
        </>
    );
};