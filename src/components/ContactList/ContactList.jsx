import React , {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ListItem } from "../ListItem";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { authSelectors } from 'redux/auth';
import viewContacts from '../../services/viewContacts';

export const ContactList = () => {
    const dispatch = useDispatch();
    //store
    const auth = useSelector(authSelectors.auth);
    const contacts = useSelector(contactsSelectors.getContacts);
    const filter = useSelector(contactsSelectors.filter);
    const filteredContact = viewContacts(filter, contacts);

    //get all contacts
    useEffect(() => { 
        dispatch(contactsOperations.axiosGetContacts());
    }, [dispatch]);

    const onClickDel = (e) => { 
        const id = e.target.id;
        const token = auth.token;
        dispatch(contactsOperations.axiosDelContact(id)).then(data => {
            dispatch(contactsOperations.axiosGetContacts(token));
        });
    };
    return (
        <ul>
            {
                contacts && filteredContact.map(({ id, name, number }) => 
                    <ListItem onClick={onClickDel} key={id} id={id} name={name} number={number} />
                )
            }
        </ul>
    );
};