import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledContainer } from './styled';
import { Typography } from '@mui/material';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h1" align="center" fontSize="60px" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm contacts={contacts} dispatch={dispatch} />
      <Typography variant="h2" align="center" fontSize="40px" gutterBottom>
        Contacts
      </Typography>
      <Filter value={filter} dispatch={dispatch} />
      <ContactList dispatch={dispatch} filter={filter} contacts={contacts} />
    </StyledContainer>
  );
};

export default App;
