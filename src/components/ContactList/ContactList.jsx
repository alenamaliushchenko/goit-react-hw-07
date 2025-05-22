import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from './Contact/Contact';
import css from './ContactList.module.css';


const ContactList = () => {
    const dispatch = useDispatch();

    const visibleContacts = useSelector(selectFilteredContacts);    
    return (
        <ul className={css.contactList}>
            {visibleContacts.map (contact => (
                <li key={contact.id} className={css.contactListItem}>
                <Contact 
                    id={contact.id}
                    avatar={contact.avatar}
                    name={contact.name}
                    phone={contact.phone}
                    number={contact.number}
                    onDelete={() => dispatch(deleteContact(contact.id))}
                />
                </li>
            ))}
        </ul>
    );
};
export default ContactList