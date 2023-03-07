import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormSearch, InputSearch, BtnSearch } from './SearchForm.styled';
import { toast } from 'react-toastify';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChangeSearch = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmitSearch = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error("The search string can't be an empty");
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <FormSearch onSubmit={handleSubmitSearch} autoComplete="on">
      <InputSearch
        type="text"
        name="search"
        value={query}
        onChange={handleChangeSearch}
      />
      <BtnSearch type="submit">Search</BtnSearch>
    </FormSearch>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
