import React, { useState } from 'react';
import { StyledForm, StyledLabel, StyledLabelWrapper } from './styled';
import { Button, TextField } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { selectContacts } from '../redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
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

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onNumberChange = e => {
    setNumber(e.target.value);
  };

  const onFormSubmitHandler = e => {
    e.preventDefault();
    onFormSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <StyledForm onSubmit={onFormSubmitHandler}>
        <StyledLabelWrapper>
          <StyledLabel>
            <TextField
              type="text"
              placeholder="Enter the name"
              name="name"
              required
              value={name}
              onChange={onNameChange}
            />
          </StyledLabel>
          <StyledLabel>
            <TextField
              type="tel"
              placeholder="Enter the phone"
              name="number"
              required
              value={number}
              onChange={onNumberChange}
            />
          </StyledLabel>
        </StyledLabelWrapper>
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </StyledForm>
    </div>
  );
};

export default ContactForm;
