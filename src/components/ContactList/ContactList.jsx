import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import Contact from './Contact/Contact';
import css from './ContactList.module.css';


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts?.items || []);
    const filter = useSelector(state => state.filters?.name || "");

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
);
    
    
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