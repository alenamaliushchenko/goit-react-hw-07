import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contactsData from './contacts.json';
import '../components/App.module.css';
import { nanoid } from 'nanoid';


const App = () => { 
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // Завантажуємо контакти з LocalStorage при завантаженні сторінки
  useEffect (() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if(storedContacts && storedContacts.length > 0){
      setContacts(storedContacts);
    } else {
      setContacts(contactsData);
      localStorage.setItem("contacts", JSON.stringify(contactsData));
    }
  }, []);
  
   // Зберігаємо контакти в LocalStorage щоразу, коли вони змінюються
  useEffect (() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
        id:nanoid(),
        avatar: "https://cdn-icons-png.flaticon.com/128/151/151782.png",
        phone: "https://cdn-icons-png.flaticon.com/128/151/151768.png" 
      }
  
  setContacts(prevContacts => [...prevContacts, contactWithId]);
};

  const handleDelete = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className='phonebook'>
      <h1 className='titleName'>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={setFilter}/> 
      <ContactList contacts = {filteredContacts} deleteContact={handleDelete}/>
    </div>
  )  
}


export default App
