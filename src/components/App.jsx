import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer } from './styled';
import { Typography } from '@mui/material';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { addContact, deleteContact, setFilter } from '../redux/contactsSlice';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onFormSubmit = ({ name, number }) => {
    const isNameAlreadyExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameAlreadyExist) {
      Notify.failure(
        `Contact with name '${name}' already exists in the phonebook.`
      );
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
    }
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    Notify.success('Contact deleted successfully.');
  };

  const onInputChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h1" align="center" fontSize="60px" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm onFormSubmit={onFormSubmit} />
      <Typography variant="h2" align="center" fontSize="40px" gutterBottom>
        Contacts
      </Typography>
      <Filter value={filter} onChange={onInputChange} />
      <ContactList
        onDeleteContact={onDeleteContact}
        contacts={filteredContacts}
      />
    </StyledContainer>
  );
};

export default App;
