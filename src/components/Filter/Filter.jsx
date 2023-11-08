import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterContainer, FilterHeader, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/selectors/selectors';
import { setFilterValue } from 'redux/slices/contactsSlice';

const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const filterInputNames = event => {
    dispatch(setFilterValue(event.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterHeader>Find contact name:</FilterHeader>
      <FilterLabel>
        <Input
          type="text"
          name="search"
          value={filter}
          onChange={filterInputNames}
          placeholder="Adam Smith"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FilterLabel>
    </FilterContainer>
  );
};

export default Filter;
