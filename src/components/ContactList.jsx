import React from 'react';
import { StyledList, StyledListItem, BoldText } from './styled';
import { Button } from '@mui/material';
import { Notify } from 'notiflix';
import { deleteContact } from '../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectContacts } from '../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    Notify.success('Contact deleted successfully.');
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledList>
      {filteredContacts.map(({ id, name, number }) => (
        <StyledListItem key={id}>
          <div>
            <BoldText>{name}:</BoldText> {number}
          </div>
          <Button
            type="text"
            variant="contained"
            color="warning"
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </Button>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default ContactList;
