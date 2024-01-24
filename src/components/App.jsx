import React from 'react';
import { StyledContainer } from './styled';
import { Typography } from '@mui/material';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h1" align="center" fontSize="60px" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h2" align="center" fontSize="40px" gutterBottom>
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </StyledContainer>
  );
};

export default App;
