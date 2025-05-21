import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contactsOps'; // імпорт правильного thunk

const ContactForm = () => {
  const dispatch = useDispatch();

  // Стан для полів форми
  const [name, setName] = useState('');
  const [number, setNumber] = useState(''); // замінив phone -> number, бо в thunk очікується number

  // Обробник зміни для input name
  const handleNameChange = (e) => setName(e.target.value);

  // Обробник зміни для input number
  const handleNumberChange = (e) => setNumber(e.target.value);

  // Обробник сабміту форми
  const handleSubmit = (event) => {
    event.preventDefault();

    // Формуємо об'єкт контакту у форматі, який очікує addContact thunk
    const newContact = { name, number };

    // Викликаємо thunk, передаючи новий контакт
    dispatch(addContact(newContact));

    // Очищуємо форму
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        required
        value={name}
        onChange={handleNameChange}
      />
      <input
        name="number"
        placeholder="Number"
        required
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
