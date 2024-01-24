import React from 'react';
import { StyledContainer } from './styled';
import { Typography, Input } from '@mui/material';
import { setFilter } from '../redux/contactsSlice';

const Filter = ({ value, dispatch }) => {
  const onInputChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };
  return (
    <StyledContainer>
      <Typography variant="h3" align="center" fontSize="20px">
        Find contacts by name
      </Typography>
      <Input
        type="text"
        placeholder="Please enter the name of contact"
        name="filter"
        value={value}
        onChange={onInputChange}
        fullWidth
        style={{ marginTop: '10px' }}
      />
    </StyledContainer>
  );
};
export default Filter;
