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
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Input,
  Label,
} from 'components/ForAllComponents/ForAll.styled';
import { WarningSpan } from 'components/EditingForm/EditingForm.styled';

const schema = yup
  .object({
    name: yup.string().min(3).max(15).required(),
    number: yup.string().min(5).max(9).required(),
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

  const navigate = useNavigate();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    const data = { name, number };
    contacts.some(element => element.name === data.name)
      ? failedNotification('This contact has already exists')
      : dispatch(addContact(data))
          .unwrap()
          .then(() => {
            navigate('/contacts');
            successfullNotification('You have added the contact!');
          })
          .catch(() =>
            failedNotification(`Smth went wrong, you didn't add a contact 😭`)
          );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span className="label-thumb">Name</span>
          {errors.name && <WarningSpan>{errors.name.message}</WarningSpan>}
          <Input
            placeholder="Adam Smith"
            {...register('name', {
              required: true,
            })}
          />
        </Label>
        <Label>
          <span className="label-thumb">Number</span>
          {errors.number && <WarningSpan>{errors.number.message}</WarningSpan>}
          <Input
            placeholder="233-22-22"
            {...register('number', {
              required: true,
            })}
          />
        </Label>
        <AddContactButton />
      </Form>
    </Container>
  );
};
export default ContactForm;
