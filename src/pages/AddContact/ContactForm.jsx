import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors/selectors';
import { addContact } from 'redux/operations/contacts.operations';
import {
  failedNotification,
  successfullNotification,
} from 'services/notifications';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AddContactButton from 'components/AddContactButton/AddContactButton';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Input,
  Label,
} from 'components/ForAllComponents/ForAll.styled';

const schema = yup
  .object({
    name: yup.string().min(3).max(15).required(),
    number: yup.string().min(5).max(8).required(),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmitButton = e => {
    e.preventDefault();
    const data = { name, number };
    contacts.some(element => element.name === data.name)
      ? failedNotification('This contact has already exists')
      : dispatch(addContact(data))
          .unwrap()
          .then(() => {
            reset();
            navigate('/contacts');
            successfullNotification('You have added the contact!');
          })
          .catch(() =>
            failedNotification(`Smth went wrong, you didn't add a contact 😭`)
          );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmitButton}>
        <Label>
          <span className="label-thumb">Name</span>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Adam Smith"
            required
          />
        </Label>
        <Label>
          <span className="label-thumb">Number</span>

          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            placeholder="233-22-22"
            maxLength={9}
            required
          />
        </Label>
        <AddContactButton />
      </Form>
    </Container>
  );
};
export default ContactForm;