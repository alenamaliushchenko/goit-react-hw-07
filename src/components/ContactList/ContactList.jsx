import Contact from './Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({contacts, deleteContact}) => {
    return (
        <ul className={css.contactList}>
            {contacts.map (contact => (
                <li key={contact.id} className={css.contactListItem}>
                <Contact 
                    id={contact.id}
                    avatar={contact.avatar}
                    name={contact.name}
                    phone={contact.phone}
                    number={contact.number}
                    onDelete={() => deleteContact(contact.id)}
                />
                </li>
            ))}
            
        </ul>
    );

};
export default ContactList