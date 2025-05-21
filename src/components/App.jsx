import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

import css from '../components/App.module.css';

import { fetchContacts, addContact, deleteContact } from '../redux/contactsOps';

import {
  selectFilteredContacts
} from '../redux/contactsSlice';

import {
  selectFilter,
  changeFilter
} from '../redux/filtersSlice';


const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.titleName}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={contacts} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
